import os
import subprocess

from seqr.utils.logging_utils import SeqrLogger
from seqr.utils.redis_utils import safe_redis_get_json, safe_redis_set_json

logger = SeqrLogger(__name__)

EXPIRATION_TIME_IN_SECONDS = 3600 - 5
GS_STORAGE_ACCESS_CACHE_KEY = 'gs_storage_access_cache_entry'


def run_command(command, user=None):
    logger.info('==> {}'.format(command), user)
    return subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, shell=True)


def _run_gsutil_command(command, gs_path, gunzip=False, user=None):
    #  Anvil buckets are requester-pays and we bill them to the anvil project
    google_project = get_google_project(gs_path)
    project_arg = '-u {} '.format(google_project) if google_project else ''
    command = 'gsutil {project_arg}{command} {gs_path}'.format(
        project_arg=project_arg, command=command, gs_path=gs_path,
    )
    if gunzip:
        command += " | gunzip -c -q - "

    return run_command(command, user=user)


def is_google_bucket_file_path(file_path):
    return file_path.startswith("gs://")


def get_google_project(gs_path):
    return 'anvil-datastorage' if gs_path.startswith('gs://fc-secure') else None


def get_gs_rest_api_headers(range_header, gs_path, user=None):
    headers = {'Authorization': 'Bearer {}'.format(_get_access_token(user))}
    if range_header:
        headers['Range'] = range_header
    headers['x-goog-user-project'] = get_google_project(gs_path)

    return headers


def _get_access_token(user):
    access_token = safe_redis_get_json(GS_STORAGE_ACCESS_CACHE_KEY)
    if not access_token:
        process = run_command('gcloud auth print-access-token', user=user)
        if process.wait() == 0:
            access_token = next(process.stdout).decode('utf-8').strip()
            safe_redis_set_json(GS_STORAGE_ACCESS_CACHE_KEY, access_token, expire=EXPIRATION_TIME_IN_SECONDS)
    return access_token


def does_file_exist(file_path, user=None):
    if is_google_bucket_file_path(file_path):
        process = _run_gsutil_command('ls', file_path, user=user)
        return process.wait() == 0
    return os.path.isfile(file_path)


def file_iter(file_path, byte_range=None, raw_content=False, user=None):
    if is_google_bucket_file_path(file_path):
        for line in _google_bucket_file_iter(file_path, byte_range=byte_range, raw_content=raw_content, user=user):
            yield line
    elif byte_range:
        command = 'dd skip={offset} count={size} bs=1 if={file_path}'.format(
            offset=byte_range[0],
            size=byte_range[1]-byte_range[0],
            file_path=file_path,
        )
        process = run_command(command, user=user)
        for line in process.stdout:
            yield line
    else:
        mode = 'rb' if raw_content else 'r'
        with open(file_path, mode) as f:
            for line in f:
                yield line


def _google_bucket_file_iter(gs_path, byte_range=None, raw_content=False, user=None):
    """Iterate over lines in the given file"""
    range_arg = ' -r {}-{}'.format(byte_range[0], byte_range[1]) if byte_range else ''
    process = _run_gsutil_command(
        'cat{}'.format(range_arg), gs_path, gunzip=gs_path.endswith("gz") and not raw_content, user=user)
    for line in process.stdout:
        if not raw_content:
            line = line.decode('utf-8')
        yield line


def mv_file_to_gs(local_path, gs_path, user=None):
    if not is_google_bucket_file_path(gs_path):
        raise Exception('A Google Storage path is expected.')
    command = 'mv {}'.format(local_path)
    process = _run_gsutil_command(command, gs_path, user=user)
    if process.wait() != 0:
        errors = [line.decode('utf-8').strip() for line in process.stdout]
        raise Exception('Run command failed: ' + ' '.join(errors))

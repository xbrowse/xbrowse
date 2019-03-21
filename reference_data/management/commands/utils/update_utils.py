import logging
import os
from tqdm import tqdm
from django.core.management.base import BaseCommand, CommandError
from reference_data.management.commands.utils.download_utils import download_file
from reference_data.management.commands.utils.gene_utils import get_genes_by_symbol

logger = logging.getLogger(__name__)


class ReferenceDataHandler(object):

    model_cls = None
    url = None
    header_fields = None

    gene_reference = {'gene_symbols_to_gene': get_genes_by_symbol()}

    @staticmethod
    def parse_record(record):
        raise NotImplementedError

    @classmethod
    def get_gene_for_record(cls, record):
        gene_symbols_to_gene = cls.gene_reference['gene_symbols_to_gene']
        gene_symbol = record.pop('gene_symbol')

        if not gene_symbols_to_gene.get(gene_symbol):
            raise ValueError('Gene "{}" not found in the GeneInfo table'.format(gene_symbol))

        return gene_symbols_to_gene[gene_symbol]


class GeneCommand(BaseCommand):
    reference_data_handler = None

    def add_arguments(self, parser):
        parser.add_argument('file_path', nargs="?",
                            help="local path of primate ai file",
                            default=os.path.join('resource_bundle', os.path.basename(self.reference_data_handler.url)))

    def handle(self, *args, **options):
        update_records(self.reference_data_handler, file_path=options.get('file_path'), )


def update_records(reference_data_handler, file_path=None):
    """
    Args:
        file_path (str): optional local file path. If not specified, or the path doesn't exist, the table will be downloaded.
    """

    if not file_path or not os.path.isfile(file_path):
        if not reference_data_handler.url:
            raise CommandError('Either file path or url is required')
        file_path = download_file(reference_data_handler.url)

    model_cls = reference_data_handler.model_cls
    model_name = type(model_cls).__name__
    model_objects = getattr(model_cls, 'objects')

    logger.info("Deleting {} existing {} records".format(model_objects.count(), model_name))
    model_objects.all().delete()

    models = []
    skip_counter = 0
    with open(file_path) as f:
        header_fields = reference_data_handler.header_fields or next(f).rstrip('\n\r').split('\t')

        for line in tqdm(f, unit=" records"):
            record = dict(zip(header_fields, line.rstrip('\r\n').split('\t')))
            record = reference_data_handler.parse_record(record)

            try:
                record['gene'] = reference_data_handler.get_gene_for_record(record)
            except ValueError as e:
                skip_counter += 1
                logger.warn(e)
                continue

            models.append(model_cls(**record))

    logger.info("Creating {} {} records".format(len(models), model_name))
    model_objects.bulk_create(models)

    logger.info("Done")
    logger.info("Loaded {} {} records from {}. Skipped {} records with unrecognized gene symbols.".format(
        model_objects.count(), model_name, file_path, skip_counter))
    if skip_counter > 0:
        logger.info('Running ./manage.py update_gencode to update the gencode version might fix missing genes')

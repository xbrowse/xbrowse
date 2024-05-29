from aiohttp.web import HTTPBadRequest

from hail_search.queries.base import BaseHailTableQuery
from hail_search.queries.snv_indel import SnvIndelHailTableQuery


class OntSnvIndelHailTableQuery(SnvIndelHailTableQuery):

    DATA_TYPE = 'ONT_SNV_INDEL'

    CORE_FIELDS = BaseHailTableQuery.CORE_FIELDS

    BASE_ANNOTATION_FIELDS = {
        k: v for k, v in SnvIndelHailTableQuery.BASE_ANNOTATION_FIELDS.items()
        if k not in SnvIndelHailTableQuery.SNV_INDEL_ANNOTATION_FIELDS
    }

    def _get_loaded_filter_ht(self, *args, **kwargs):
        return None

    def _add_project_lookup_data(self, *args, **kwargs):
        raise HTTPBadRequest(reason='Variant lookup is not supported for ONT data')

import logging
from collections import OrderedDict
from django.core.management.base import BaseCommand

from reference_data.management.commands.utils.update_utils import update_records
from reference_data.management.commands.update_human_phenotype_ontology import update_hpo
from reference_data.management.commands.update_dbnsfp_gene import DbNSFPReferenceDataHandler
from reference_data.management.commands.update_gencode import update_gencode
from reference_data.management.commands.update_gene_constraint import GeneConstraintReferenceDataHandler
from reference_data.management.commands.update_omim import OmimReferenceDataHandler
from reference_data.management.commands.update_primate_ai import PrimateAIReferenceDataHandler
from reference_data.management.commands.update_mgi import MGIReferenceDataHandler
from reference_data.management.commands.update_gene_cn_sensitivity import CNSensitivityReferenceDataHandler

logger = logging.getLogger(__name__)

REFERENCE_DATA_SOURCES = OrderedDict([
    ("dbnsfp_gene", DbNSFPReferenceDataHandler),
    ("gene_constraint", GeneConstraintReferenceDataHandler),
    ("gene_cn_sensitivity", CNSensitivityReferenceDataHandler),
    ("primate_ai", PrimateAIReferenceDataHandler),
    ("mgi", MGIReferenceDataHandler),
    ("hpo", None),
])


class Command(BaseCommand):
    help = "Loads all reference data"

    def add_arguments(self, parser):
        omim_options = parser.add_mutually_exclusive_group(required=True)
        omim_options.add_argument('--omim-key', help="OMIM key provided with registration at http://data.omim.org/downloads")
        omim_options.add_argument('--skip-omim', help="Don't reload gene constraint", action="store_true")

        parser.add_argument('--skip-gencode', help="Don't reload gencode", action="store_true")

        for source in REFERENCE_DATA_SOURCES.keys():
            parser.add_argument(
                '--skip-{}'.format(source.replace('_', '-')), help="Don't reload {}".format(source), action="store_true"
            )

    def handle(self, *args, **options):
        updated = []
        update_failed = []

        if not options["skip_gencode"]:
            # Download latest version first, and then add any genes from old releases not included in the latest release
            # Old gene ids are used in the gene constraint table and other datasets, as well as older sequencing data
            update_gencode(31, reset=True)
            update_gencode(29)
            update_gencode(28)
            update_gencode(27)
            update_gencode(19)
            updated.append('gencode')

        if not options["skip_omim"]:
            try:
                update_records(OmimReferenceDataHandler(options["omim_key"]))
                updated.append('omim')
            except Exception as e:
                logger.error("unable to update omim: {}".format(e))
                update_failed.append('omim')

        for source, data_handler in REFERENCE_DATA_SOURCES.items():
            if not options["skip_{}".format(source)]:
                try:
                    if data_handler:
                        update_records(data_handler())
                    elif source == "hpo":
                        update_hpo()
                    updated.append(source)
                except Exception as e:
                    logger.error("unable to update {}: {}".format(source, e))
                    update_failed.append(source)

        logger.info("Done")
        if updated:
            logger.info("Updated: {}".format(', '.join(updated)))
        if update_failed:
            logger.info("Failed to Update: {}".format(', '.join(update_failed)))

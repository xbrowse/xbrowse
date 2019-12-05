import logging

from reference_data.models import HumanPhenotypeOntology

from matchmaker.models import MatchmakerSubmission
from seqr.utils.gene_utils import get_genes, get_gene_ids_for_gene_symbols
from settings import MME_DEFAULT_CONTACT_INSTITUTION

logger = logging.getLogger(__name__)


def get_mme_genes_phenotypes(results, additional_genes=None, additional_hpo_ids=None):
    hpo_ids = additional_hpo_ids if additional_hpo_ids else set()
    genes = additional_genes if additional_genes else set()
    for result in results:
        hpo_ids.update({feature['id'] for feature in result['patient'].get('features', []) if feature.get('id')})
        genes.update({gene_feature['gene']['id'] for gene_feature in result['patient'].get('genomicFeatures', [])})

    gene_ids = {gene for gene in genes if gene.startswith('ENSG')}
    gene_symols = {gene for gene in genes if not gene.startswith('ENSG')}
    gene_symbols_to_ids = get_gene_ids_for_gene_symbols(gene_symols)
    gene_ids.update({new_gene_ids[0] for new_gene_ids in gene_symbols_to_ids.values()})
    genes_by_id = get_genes(gene_ids)

    hpo_terms_by_id = {hpo.hpo_id: hpo.name for hpo in HumanPhenotypeOntology.objects.filter(hpo_id__in=hpo_ids)}

    return hpo_terms_by_id, genes_by_id, gene_symbols_to_ids


def parse_mme_features(features, hpo_terms_by_id):
    phenotypes = [feature for feature in (features or [])]
    for feature in phenotypes:
        feature['label'] = hpo_terms_by_id.get(feature['id'])
    return phenotypes


def parse_mme_gene_variants(genomic_features, gene_symbols_to_ids):
    gene_variants = []
    for gene_feature in (genomic_features or []):
        gene_id = gene_feature['gene']['id']
        if not gene_id.startswith('ENSG'):
            gene_ids = gene_symbols_to_ids.get(gene_feature['gene']['id'])
            gene_id = gene_ids[0] if gene_ids else None

        gene_variant = {'geneId': gene_id}
        if gene_id:
            if gene_feature.get('variant'):
                gene_variant.update({
                    'alt': gene_feature['variant'].get('alternateBases'),
                    'ref': gene_feature['variant'].get('referenceBases'),
                    'chrom': gene_feature['variant'].get('referenceName'),
                    'pos': gene_feature['variant'].get('start'),
                    'genomeVersion': gene_feature['variant'].get('assembly'),
                })
            gene_variants.append(gene_variant)
    return gene_variants


def parse_mme_patient(result, hpo_terms_by_id, gene_symbols_to_ids, submission_guid):
    phenotypes = parse_mme_features(result['patient'].get('features'), hpo_terms_by_id)
    gene_variants = parse_mme_gene_variants(result['patient'].get('genomicFeatures'), gene_symbols_to_ids)

    parsed_result = {
        'geneVariants': gene_variants,
        'phenotypes': phenotypes,
        'submissionGuid': submission_guid,
    }
    parsed_result.update(result)
    return parsed_result


def get_submission_json_for_external_match(submission):
    return {
        'patient': {
            'id': submission.submission_id,
            'label': submission.label,
            'contact': {
                'href': submission.contact_href,
                'name': submission.contact_name,
                'institution': MME_DEFAULT_CONTACT_INSTITUTION,
            },
            'species': 'NCBITaxon:9606',
            'sex': MatchmakerSubmission.SEX_LOOKUP[submission.individual.sex],
            'features': submission.features,
            'genomicFeatures': submission.genomic_features,
        }
    }

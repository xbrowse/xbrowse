import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCurrentProject, getUser } from 'redux/selectors'
import ReduxFormWrapper from 'shared/components/form/ReduxFormWrapper'
import BaseBulkContent from 'shared/components/form/BaseBulkContent'
import {
  INDIVIDUAL_HPO_EXPORT_DATA,
  FILE_FIELD_NAME,
  BASE_UPLOAD_FORMATS,
  INDIVIDUAL_CORE_EXPORT_DATA,
  INDIVIDUAL_BULK_UPDATE_EXPORT_DATA,
  INDIVIDUAL_ID_EXPORT_DATA,
} from 'shared/utils/constants'
import { FAMILY_BULK_EDIT_EXPORT_DATA } from '../../constants'
import { updateFamilies, updateIndividuals, updateIndividualsHpoTerms } from '../../reducers'
import {
  getEntityExportConfig,
  getProjectAnalysisGroupFamiliesByGuid,
  getProjectAnalysisGroupIndividualsByGuid,
} from '../../selectors'

const ALL_UPLOAD_FORMATS = BASE_UPLOAD_FORMATS.concat([
  { title: 'Phenotips Export', formatLinks: [{ href: 'https://phenotips.org/', linkExt: 'json' }] },
])
const FAM_UPLOAD_FORMATS = [].concat(BASE_UPLOAD_FORMATS)
FAM_UPLOAD_FORMATS[1] = { ...FAM_UPLOAD_FORMATS[1], formatLinks: [...FAM_UPLOAD_FORMATS[1].formatLinks, { href: 'https://www.cog-genomics.org/plink2/formats#fam', linkExt: 'fam' }] }


const mapStateToProps = (state, ownProps) => ({
  project: getCurrentProject(state),
  exportConfig: getEntityExportConfig(
    getCurrentProject(state),
    Object.values(ownProps.rawData || getProjectAnalysisGroupIndividualsByGuid(state, ownProps)),
    null,
    ownProps.name,
    ownProps.requiredFields.concat(ownProps.optionalFields),
  ),
  blankExportConfig: ownProps.blankDownload && getEntityExportConfig(getCurrentProject(state), [], null, 'template', ownProps.requiredFields.concat(ownProps.optionalFields)),
})

const BulkContent = connect(mapStateToProps)(BaseBulkContent)

const EditBulkForm = React.memo(({ name, modalName, onSubmit, ...props }) =>
  <ReduxFormWrapper
    form={`bulkUpload_${name}`}
    modalName={modalName}
    onSubmit={values => onSubmit(values[FILE_FIELD_NAME])}
    confirmCloseIfNotSaved
    closeOnSuccess
    showErrorPanel
    liveValidate
    size="small"
  >
    <BulkContent name={name} {...props} />
  </ReduxFormWrapper>,
)

EditBulkForm.propTypes = {
  name: PropTypes.string.isRequired,
  modalName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const FAMILY_ID_EXPORT_DATA = FAMILY_BULK_EDIT_EXPORT_DATA.slice(0, 1)
const FAMILY_EXPORT_DATA = FAMILY_BULK_EDIT_EXPORT_DATA.slice(1)

const mapFamiliesStateToProps = (state, ownProps) => ({
  rawData: getProjectAnalysisGroupFamiliesByGuid(state, ownProps),
})

const FamiliesBulkForm = React.memo(props =>
  <EditBulkForm
    name="families"
    actionDescription="bulk-add or edit families"
    details={
      <div>
        If the Family ID in the table matches those of an existing family in the project,
        the matching families&apos;s data will be updated with values from the table. Otherwise, a new family
        will be created. To edit an existing families&apos;s ID include a <b>Previous Family ID</b> column.
      </div>
    }
    requiredFields={FAMILY_ID_EXPORT_DATA}
    optionalFields={FAMILY_EXPORT_DATA}
    uploadFormats={BASE_UPLOAD_FORMATS}
    blankDownload
    {...props}
  />,
)

const mapFamiliesDispatchToProps = {
  onSubmit: updateFamilies,
}

export const EditFamiliesBulkForm = connect(mapFamiliesStateToProps, mapFamiliesDispatchToProps)(FamiliesBulkForm)

const IndividualsBulkForm = React.memo(({ user, ...props }) =>
  <EditBulkForm
    name="individuals"
    actionDescription="bulk-add or edit individuals"
    details={
      <div>
        If the Family ID and Individual ID in the table match those of an existing individual in the project,
        the matching individual&apos;s data will be updated with values from the table. Otherwise, a new individual
        will be created. To edit an existing individual&apos;s ID include a <b>Previous Individual ID</b> column.
      </div>
    }
    requiredFields={INDIVIDUAL_ID_EXPORT_DATA}
    optionalFields={user.isAnalyst ? INDIVIDUAL_BULK_UPDATE_EXPORT_DATA : INDIVIDUAL_CORE_EXPORT_DATA}
    uploadFormats={FAM_UPLOAD_FORMATS}
    blankDownload
    {...props}
  />,
)

IndividualsBulkForm.propTypes = {
  user: PropTypes.object,
}

const mapIndividualsStateToProps = state => ({
  user: getUser(state),
})

const mapIndividualsDispatchToProps = {
  onSubmit: updateIndividuals,
}

export const EditIndividualsBulkForm = connect(mapIndividualsStateToProps, mapIndividualsDispatchToProps)(IndividualsBulkForm)


const HPOBulkForm = React.memo(props =>
  <EditBulkForm
    name="hpo_terms"
    actionDescription="edit individual's HPO terms"
    details="Alternately, the table can have a single row per HPO term"
    requiredFields={INDIVIDUAL_ID_EXPORT_DATA}
    optionalFields={INDIVIDUAL_HPO_EXPORT_DATA}
    uploadFormats={ALL_UPLOAD_FORMATS}
    {...props}
  />,
)

const mapHpoDispatchToProps = {
  onSubmit: updateIndividualsHpoTerms,
}

export const EditHPOBulkForm = connect(null, mapHpoDispatchToProps)(HPOBulkForm)

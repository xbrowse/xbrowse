import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Header } from 'semantic-ui-react'

import { getProjectsByGuid, getProjectDatasetTypes, getCurrentSearchParams } from 'redux/selectors'
import { Select, InlineToggle, BaseSemanticInput } from 'shared/components/form/Inputs'
import { configuredField } from 'shared/components/form/ReduxFormWrapper'
import VariantSearchFormContainer from 'shared/components/panel/search/VariantSearchFormContainer'
import VariantSearchFormPanels, {
  HGMD_PATHOGENICITY_PANEL, ANNOTATION_PANEL, FREQUENCY_PANEL, LOCATION_PANEL, QUALITY_PANEL,
} from 'shared/components/panel/search/VariantSearchFormPanels'
import { AddProjectButton, ProjectFilter } from 'shared/components/panel/search/ProjectsField'
import VariantSearchResults from 'shared/components/panel/search/VariantSearchResults'
import DataLoader from 'shared/components/DataLoader'
import { InlineHeader } from 'shared/components/StyledComponents'
import { INHERITANCE_FILTER_OPTIONS, ALL_INHERITANCE_FILTER } from 'shared/utils/constants'
import { CUSTOM_SEARCH_FORM_NAME, INCLUDE_ALL_PROJECTS } from '../constants'
import { loadProjectContext, loadProjectGroupContext, loadSearchHashContext } from '../reducers'
import { getSearchIncludeAllProjectsInput, getSearchHashContextLoading } from '../selectors'

const mapProjectsStateToProps = (state, ownProps) => ({
  project: getProjectsByGuid(state)[ownProps.value],
  projectHasSamples: (getProjectDatasetTypes(state)[ownProps.value] || []).length > 0,
})

const mapProjectsDispatchToProps = {
  load: loadProjectContext,
}

const mapAddProjectDispatchToProps = {
  addProjectGroup: loadProjectGroupContext,
}

const PROJECT_FAMILIES_FIELD = {
  name: 'projectGuids',
  component: connect(mapProjectsStateToProps, mapProjectsDispatchToProps)(ProjectFilter),
  addArrayElement: connect(null, mapAddProjectDispatchToProps)(AddProjectButton),
  isArrayField: true,
}

const INCLUDE_ALL_PROJECTS_FIELD = {
  name: INCLUDE_ALL_PROJECTS,
  component: InlineToggle,
  fullHeight: true,
}

const getParsedJson = (value) => {
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

const getJsonParseError = (value) => {
  try {
    JSON.parse(value)
    return undefined
  } catch (e) {
    return e.toString()
  }
}

const CUSTOM_QUERY_FIELD = {
  name: 'search.customQuery',
  component: BaseSemanticInput,
  inputType: 'TextArea',
  rows: 10,
  style: { fontFamily: 'monospace' },
  format: val => (typeof val === 'object' ? JSON.stringify(val) : (val || '{}')),
  normalize: getParsedJson,
  validate: val => (typeof val === 'string' ? getJsonParseError(val) : undefined),
}

const INHERITANCE_PANEL = {
  name: 'inheritance.mode',
  headerProps: {
    title: 'Inheritance',
    inputProps: {
      component: Select,
      options: INHERITANCE_FILTER_OPTIONS,
      format: val => val || ALL_INHERITANCE_FILTER,
      normalize: val => (val === ALL_INHERITANCE_FILTER ? null : val),
    },
  },
  helpText: <Header disabled content="Custom inheritance search is disabled for multi-family searches" />,
}

const PANELS = [
  INHERITANCE_PANEL, HGMD_PATHOGENICITY_PANEL, ANNOTATION_PANEL, FREQUENCY_PANEL, LOCATION_PANEL, QUALITY_PANEL,
]

const CustomSearch = React.memo((
  { match, history, includeAllProjects, loadContext, loading, searchParams, ...props },
) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={16}>
        <DataLoader contentId={match.params.searchHash} content loading={loading} load={loadContext} hideError>
          <VariantSearchFormContainer
            history={history}
            resultsPath="/report/custom_search"
            form={CUSTOM_SEARCH_FORM_NAME}
            initialValues={searchParams}
          >
            <InlineHeader content="Include All Projects: " />
            {configuredField(INCLUDE_ALL_PROJECTS_FIELD)}
            {includeAllProjects ? null : configuredField(PROJECT_FAMILIES_FIELD)}
            <VariantSearchFormPanels panels={PANELS} />
            {configuredField(CUSTOM_QUERY_FIELD)}
          </VariantSearchFormContainer>
        </DataLoader>
      </Grid.Column>
    </Grid.Row>
    {match.params.searchHash &&
      <VariantSearchResults match={match} history={history} contextLoading={loading} {...props} />}
  </Grid>
))

CustomSearch.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  includeAllProjects: PropTypes.bool,
  loadContext: PropTypes.func,
  loading: PropTypes.bool,
  searchParams: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => ({
  includeAllProjects: getSearchIncludeAllProjectsInput(state),
  loading: getSearchHashContextLoading(state),
  searchParams: getCurrentSearchParams(state, ownProps),
})

const mapDispatchToProps = {
  loadContext: loadSearchHashContext,
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSearch)

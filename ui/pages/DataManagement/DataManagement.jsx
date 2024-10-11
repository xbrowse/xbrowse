import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { getUser, getElasticsearchEnabled } from 'redux/selectors'
import { Error404, Error401 } from 'shared/components/page/Errors'
import { SimplePageHeader } from 'shared/components/page/PageHeaderLayout'

import AddIGV from './components/AddIGV'
import ElasticsearchStatus from './components/ElasticsearchStatus'
import LoadData from './components/LoadData'
import RnaSeq from './components/RnaSeq'
import SampleQc from './components/SampleQc'
import Users from './components/Users'
import PhenotypePrioritization from './components/PhenotypePrioritization'

const IFRAME_STYLE = { position: 'fixed', left: '0', top: '95px' }

const PM_DATA_MANAGEMENT_PAGES = [
  { path: 'load_data', component: LoadData },
  { path: 'add_igv', component: AddIGV },
  { path: 'rna_seq', component: RnaSeq },
]

const DATA_MANAGEMENT_PAGES = [
  ...PM_DATA_MANAGEMENT_PAGES,
  { path: 'sample_qc', component: SampleQc },
  { path: 'users', component: Users },
  { path: 'phenotype_prioritization', component: PhenotypePrioritization },
]

const IframePage = ({ title, src }) => <iframe width="100%" height="100%" title={title} style={IFRAME_STYLE} src={src} />

IframePage.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
}

const ES_DATA_MANAGEMENT_PAGES = [
  { path: 'elasticsearch_status', component: ElasticsearchStatus },
  {
    path: 'kibana',
    component: () => <IframePage title="Kibana" src="/app/kibana" />,
  },
  ...DATA_MANAGEMENT_PAGES,
]

const HAIL_SEARCH_DATA_MANAGEMENT_PAGES = [
  ...DATA_MANAGEMENT_PAGES,
  { path: 'luigi', component: () => <IframePage title="Loading UI" src="/luigi_ui" /> },
]

const dataManagementPages = (isDataManager, elasticsearchEnabled) => {
  if (!isDataManager) {
    return PM_DATA_MANAGEMENT_PAGES
  }
  return elasticsearchEnabled ? ES_DATA_MANAGEMENT_PAGES : HAIL_SEARCH_DATA_MANAGEMENT_PAGES
}

const mapPageHeaderStateToProps = state => ({
  pages: dataManagementPages(getUser(state).isDataManager, getElasticsearchEnabled(state)),
})

export const DataManagementPageHeader = connect(mapPageHeaderStateToProps)(SimplePageHeader)

const DataManagement = ({ match, user, elasticsearchEnabled }) => (
  (user.isDataManager || user.isPm) ? (
    <Switch>
      {dataManagementPages(user.isDataManager, elasticsearchEnabled).map(({ path, params, component }) => (
        <Route key={path} path={`${match.url}/${path}${params || ''}`} component={component} />))}
      <Route exact path={match.url} component={null} />
      <Route component={Error404} />
    </Switch>
  ) : <Error401 />
)

DataManagement.propTypes = {
  user: PropTypes.object,
  match: PropTypes.object,
  elasticsearchEnabled: PropTypes.bool,
}

const mapStateToProps = state => ({
  user: getUser(state),
  elasticsearchEnabled: getElasticsearchEnabled(state),
})

export default connect(mapStateToProps)(DataManagement)

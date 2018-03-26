import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Table, Form } from 'semantic-ui-react'
import DocumentTitle from 'react-document-title'

import { getProject } from 'redux/rootReducer'
import ExportTableButton from 'shared/components/buttons/export-table/ExportTableButton'
import ProjectOverview from './components/ProjectOverview'
import TableBody from './components/table-body/TableBody'


const Project = props =>
  <Form>
    <DocumentTitle title={`seqr: ${props.project.name}`} />
    <ProjectOverview />
    <div style={{ float: 'right', padding: '0px 65px 10px 0px' }}>
      <ExportTableButton urls={[
        { name: 'Families', url: `/api/project/${props.project.projectGuid}/export_project_families` },
        { name: 'Individuals', url: `/api/project/${props.project.projectGuid}/export_project_individuals?include_phenotypes=1` }]}
      />
    </div>
    <Table celled style={{ width: '100%' }}>
      <TableBody />
    </Table>
  </Form>


Project.propTypes = {
  project: PropTypes.object,
}

const mapStateToProps = state => ({
  project: getProject(state),
})

export default connect(mapStateToProps)(Project)

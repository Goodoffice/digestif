import React from 'react'
import { connect } from 'react-redux'

import fetchJobs from '../actions/fetchJobs';
import fetchSources from '../actions/fetchSources';
import fetchSavedSearches from '../actions/fetchSavedSearches';
import createSource from '../actions/createSource';
import createSavedSearch from '../actions/createSavedSearch';
import {
  openAddSavedSearchDialog,
  closeAddSavedSearchDialog
} from '../actions/ui';

import component from '../components/App';

export const mapStateToProps = (state, ownProps) => {
  return {
    sources: state.get('sources'),
    savedSearches: state.get('savedSearches'),
    jobs: state.get('jobs'),
    ui: state.get('ui')
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchSources: () => dispatch(fetchSources()),
      fetchJobs: (params) => dispatch(fetchJobs(params)),
      fetchSavedSearches: (params) => dispatch(fetchSavedSearches(params)),
      createSource: (attributes) => dispatch(createSource(attributes)),
      createSavedSearch: (attributes) => dispatch(createSavedSearch(attributes)),
      openAddSavedSearchDialog: () => dispatch(openAddSavedSearchDialog()),
      closeAddSavedSearchDialog: () => dispatch(closeAddSavedSearchDialog())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

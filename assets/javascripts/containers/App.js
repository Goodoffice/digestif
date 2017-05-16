import React from 'react'
import { connect } from 'react-redux'

import fetchJobs from 'actions/fetchJobs';
import fetchSources from 'actions/fetchSources';
import createSource from 'actions/createSource';

import component from 'components/App';

export const mapStateToProps = (state, ownProps) => {
  return {
    sources: state.get('sources'),
    jobs: state.get('jobs')
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchSources: () => dispatch(fetchSources()),
      fetchJobs: () => dispatch(fetchJobs()),
      createSource: (attributes) => dispatch(createSource(attributes))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

import React from 'react'
import { connect } from 'react-redux'

import fetchJobs from 'actions/fetchJobs';

import component from 'components/App';

export const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.get('jobs')
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchJobs: () => dispatch(fetchJobs())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)

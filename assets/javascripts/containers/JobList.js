import { connect } from 'react-redux'
import JobList from '../components/JobList';
import fetchJobs from 'actions/fetchJobs';

export const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.get('jobs'),
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchJobs: (params) => dispatch(fetchJobs(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList)

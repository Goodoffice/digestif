import { connect } from 'react-redux'
import JobList from '../components/JobList';
import fetchJobs from '../actions/fetchJobs';
import markRead from '../actions/markRead';

export const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.get('jobs'),
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchJobs: (params) => dispatch(fetchJobs(params)),
      markRead: (job) => dispatch(markRead(job))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList)

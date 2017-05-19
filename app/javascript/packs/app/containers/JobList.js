import { connect } from 'react-redux'
import JobList from '../components/JobList';
import fetchJobs from '../actions/fetchJobs';
import markRead from '../actions/markRead';
import toggleStar from '../actions/toggleStar';

export const mapStateToProps = (state, ownProps) => {
  return {
    jobs: state.get('jobs'),
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchJobs: (params) => dispatch(fetchJobs(params)),
      markRead: (job) => dispatch(markRead(job)),
      toggleStar: (job) => dispatch(toggleStar(job))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList)

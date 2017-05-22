import { fromJS } from 'immutable';
import {
  MARK_READ,
  STAR, UNSTAR,
  FETCH_JOBS
} from '../actions/types';

const initialState = fromJS({
    results: [],
    more: false,
    page: 0,
    loading: true,
    error: false
});

const findIndex = (state, job) => state.get('results').findIndex(j => j.get('id') === job.get('id'));
const setIndex = (state, index, job) => state.set('results', state.get('results').set(index, job));
const replaceResult = (state, job) => setIndex(state, findIndex(state, job), job)

const handleMarkRead = (state, action) => replaceResult(state, action.job.set('unread', false));
const handleStar = (state, action) => replaceResult(state, action.payload.job.set('starred', true));
const handleUnstar = (state, action) => replaceResult(state, action.payload.job.set('starred', false));


const handleFetchJobsSuccess = (state, action) => {
  const results =
    action.payload.page > 0 ?
    state.get('results').concat(fromJS(action.payload.jobs)) :
    fromJS(action.payload.jobs);

  return state
    .set('loading', false)
    .set('more', action.payload.more)
    .set('page', action.payload.page)
    .set('results', results);
}

export default function(state=initialState, action) {
  switch (action.type) {
    case MARK_READ:
      return handleMarkRead(state, action);
    case STAR.SUCCESS:
      return handleStar(state, action);
    case UNSTAR.SUCCESS:
      return handleUnstar(state, action);
    case FETCH_JOBS.REQUEST:
      return state
        .set('error', false)
        .set('more', false)
        .set('page', 0)
        .set('results', action.payload.page > 1 ? state.get('results') : fromJS([]))
        .set('loading', true);
    case FETCH_JOBS.SUCCESS:
      return handleFetchJobsSuccess(state, action);
    case FETCH_JOBS.FAILURE:
      return state
        .set('loading', false)
        .set('more', false)
        .set('page', 0)
        .set('error', true);

    default:
      return state;
  }
}



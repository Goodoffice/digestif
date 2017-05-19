import { fromJS } from 'immutable';
import {
  MARK_READ,
  STAR, UNSTAR,
  FETCH_JOBS
} from '../actions/types';

const initialState = fromJS({
    results: [],
    loading: true,
    error: false
});

const findIndex = (state, job) => state.get('results').findIndex(j => j.get('id') === job.get('id'));
const setIndex = (state, index, job) => state.set('results', state.get('results').set(index, job));
const replaceResult = (state, job) => setIndex(state, findIndex(state, job), job)

const handleMarkRead = (state, action) => replaceResult(state, action.job.set('unread', false));
const handleStar = (state, action) => replaceResult(state, action.payload.job.set('starred', true));
const handleUnstar = (state, action) => replaceResult(state, action.payload.job.set('starred', false));


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
        .set('loading', true);
    case FETCH_JOBS.SUCCESS:
      return state
        .set('loading', false)
        .set('results', fromJS(action.payload));
    case FETCH_JOBS.FAILURE:
      return state
        .set('loading', false)
        .set('error', true);

    default:
      return state;
  }
}



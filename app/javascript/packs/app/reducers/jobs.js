import { fromJS } from 'immutable';
import { MARK_READ, FETCH_JOBS } from '../actions/types';

const initialState = fromJS({
    results: [],
    loading: true,
    error: false
});

const handleMarkRead = (state, action) => {
  const results = state.get('results');
  const index = results.findIndex(job => job.get('id') === action.job.get('id'));

  return state
    .set('results', results.set(index, action.job.set('unread', false)));
}

export default function(state=initialState, action) {
  switch (action.type) {
    case MARK_READ:
      return handleMarkRead(state, action);
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



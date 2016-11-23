import { fromJS } from 'immutable';
import { FETCH_JOBS } from 'actions/types';

const initialState = fromJS({
    results: [],
    loading: true,
    error: false
});

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_JOBS.REQUEST:
            return state
                .set('loading', true);
        case FETCH_JOBS.SUCCESS:
            return state
                .set('loading', false)
                .set('results', fromJS(action.payload.jobs));
        case FETCH_JOBS.FAILURE:
            return state
                .set('loading', false)
                .set('error', true);

        default:
            return state;
    }
}



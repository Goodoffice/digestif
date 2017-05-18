import { fromJS } from 'immutable';
import { FETCH_SAVED_SEARCHES } from '../actions/types';
import { lowerCase } from 'lodash';

const initialState = fromJS({
    results: [],
    loading: true,
    error: false
});

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_SAVED_SEARCHES.REQUEST:
            return state
                .set('loading', true);
        case FETCH_SAVED_SEARCHES.SUCCESS:
            return state
                .set('loading', false)
                .set('results', fromJS(action.payload).sortBy(s => lowerCase(s.get('query'))));
        case FETCH_SAVED_SEARCHES.FAILURE:
            return state
                .set('loading', false)
                .set('error', true);

        default:
            return state;
    }
}



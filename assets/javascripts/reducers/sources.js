import { fromJS } from 'immutable';
import { FETCH_SOURCES, CREATE_SOURCE } from 'actions/types';
import { lowerCase } from 'lodash';

const initialState = fromJS({
    results: [],
    loading: true,
    error: false
});

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_SOURCES.REQUEST:
            return state
                .set('loading', true);
        case FETCH_SOURCES.SUCCESS:
            return state
                .set('loading', false)
                .set('results', fromJS(action.payload).sortBy(s => lowerCase(s.get('name'))));
        case FETCH_SOURCES.FAILURE:
            return state
                .set('loading', false)
                .set('error', true);

        case CREATE_SOURCE.REQUEST:
            return state
                .set('loading', true);
        case CREATE_SOURCE.SUCCESS:
            return state
                .set('loading', false)
                .set('results', state.get('results').push(action.payload).sortBy(s => lowerCase(s.get('name'))));
        case CREATE_SOURCE.FAILURE:
            return state
                .set('loading', false)
                .set('error', true);
        default:
            return state;
    }
}



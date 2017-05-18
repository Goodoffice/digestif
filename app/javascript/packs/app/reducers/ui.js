import { fromJS } from 'immutable';
import {
  CREATE_SAVED_SEARCH,
  OPEN_ADD_SAVED_SEARCH_DIALOG
} from '../actions/types';

const initialState = fromJS({
  addSavedSearchDialogOpen: false,
  addSourceDialogOpen: false
});

export default function(state=initialState, action) {
    switch (action.type) {
        case CREATE_SAVED_SEARCH.SUCCESS:
            return state
                .set('addSavedSearchDialogOpen', false);
        case OPEN_ADD_SAVED_SEARCH_DIALOG:
            return state
                .set('addSavedSearchDialogOpen', true);
        default:
            return state;
    }
}



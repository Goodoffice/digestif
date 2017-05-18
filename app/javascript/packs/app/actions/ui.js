import {
  OPEN_ADD_SAVED_SEARCH_DIALOG,
  CLOSE_ADD_SAVED_SEARCH_DIALOG
} from './types';

export const openAddSavedSearchDialog = () => (
    {
      type: OPEN_ADD_SAVED_SEARCH_DIALOG
    }
);

export const closeAddSavedSearchDialog = () => (
    {
      type: CLOSE_ADD_SAVED_SEARCH_DIALOG
    }
);

import apiCall from './apiCall';
import { CREATE_SAVED_SEARCH } from './types';

export default function(attributes) {
  return apiCall({
      endpoint: "/api/saved_searches",
      method: 'POST',
      body: JSON.stringify({ saved_search: attributes }),
      types: [
        {
            type: CREATE_SAVED_SEARCH.REQUEST
        },
        {
            type: CREATE_SAVED_SEARCH.SUCCESS
        },
        {
            type: CREATE_SAVED_SEARCH.FAILURE
        }
      ],
  })
};


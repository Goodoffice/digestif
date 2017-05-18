import { CALL_API } from 'redux-api-middleware';
import { CREATE_SAVED_SEARCH } from './types';

export default function(attributes) {
  return {
    [CALL_API]: {
      endpoint: "/api/saved_searches",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    }
  };
}


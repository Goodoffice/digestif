import apiCall from './apiCall';
import { FETCH_SAVED_SEARCHES } from './types';

export default function(params) {
  return apiCall({
    endpoint: "/api/saved_searches",
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
    types: [
      {
          type: FETCH_SAVED_SEARCHES.REQUEST
      },
      {
          type: FETCH_SAVED_SEARCHES.SUCCESS
      },
      {
          type: FETCH_SAVED_SEARCHES.FAILURE
      }
    ],
  });
};


import apiCall from './apiCall';
import { CREATE_SOURCE } from './types';

export default function(attributes) {
  return apiCall({
    endpoint: "/api/sources",
    method: 'POST',
    body: JSON.stringify({ source: attributes }),
    types: [
      {
          type: CREATE_SOURCE.REQUEST
      },
      {
          type: CREATE_SOURCE.SUCCESS
      },
      {
          type: CREATE_SOURCE.FAILURE
      }
    ],
  });
};


import apiCall from './apiCall';
import { FETCH_SOURCES } from './types';

export default function() {
  return apiCall({
    endpoint: "/api/sources",
    method: 'GET',
    types: [
      {
          type: FETCH_SOURCES.REQUEST
      },
      {
          type: FETCH_SOURCES.SUCCESS
      },
      {
          type: FETCH_SOURCES.FAILURE
      }
    ],
  });
};


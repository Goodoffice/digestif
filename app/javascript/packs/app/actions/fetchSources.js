import { CALL_API } from 'redux-api-middleware';
import { FETCH_SOURCES } from './types';

export default function() {
  return {
    [CALL_API]: {
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
    }
  };
}


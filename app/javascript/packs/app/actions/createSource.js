import { CALL_API } from 'redux-api-middleware';
import { CREATE_SOURCE } from './types';

export default function(attributes) {
  return {
    [CALL_API]: {
      endpoint: "/api/sources",
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    }
  };
}


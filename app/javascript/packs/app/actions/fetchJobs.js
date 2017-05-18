import { CALL_API } from 'redux-api-middleware';
import { FETCH_JOBS } from './types';

import queryString from 'query-string';

const toQueryString = params => queryString.stringify(params);

export default function(params) {
  return {
    [CALL_API]: {
      endpoint: `/api/jobs?${toQueryString(params)}`,
      method: 'GET',
      types: [
        {
            type: FETCH_JOBS.REQUEST
        },
        {
            type: FETCH_JOBS.SUCCESS
        },
        {
            type: FETCH_JOBS.FAILURE
        }
      ],
    }
  };
}


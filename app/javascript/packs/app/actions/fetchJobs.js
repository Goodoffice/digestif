import apiCall from './apiCall';
import { FETCH_JOBS } from './types';

import queryString from 'query-string';

const toQueryString = params => queryString.stringify(params);

export default function(params) {
  return apiCall({
    endpoint: `/api/jobs?${toQueryString(params)}`,
    method: 'GET',
    types: [
      {
          type: FETCH_JOBS.REQUEST,
          payload: Object.assign({}, params, { q: params.query })
      },
      {
          type: FETCH_JOBS.SUCCESS
      },
      {
          type: FETCH_JOBS.FAILURE
      }
    ],
  });
};


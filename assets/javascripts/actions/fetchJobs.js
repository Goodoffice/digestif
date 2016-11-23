import { CALL_API } from 'redux-api-middleware';
import { FETCH_JOBS } from 'actions/types';

export default function() {
  return {
    [CALL_API]: {
      endpoint: "/api/jobs",
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


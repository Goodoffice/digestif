import { STAR, UNSTAR } from './types';
import apiCall from './apiCall';

const star = job => (
  apiCall({
    endpoint: `/api/jobs/${job.get('id')}/star`,
    method: 'POST',
    types: [
      {
          type: STAR.REQUEST
      },
      {
          type: STAR.SUCCESS,
          payload: { job }
      },
      {
          type: STAR.FAILURE
      }
    ],
  })
);

const unstar = job => (
  apiCall({
    endpoint: `/api/jobs/${job.get('id')}/star`,
    method: 'DELETE',
    types: [
      {
          type: UNSTAR.REQUEST
      },
      {
          type: UNSTAR.SUCCESS,
          payload: { job }
      },
      {
          type: UNSTAR.FAILURE
      }
    ],
  })
);


const toggleStar = job => {
  if (job.get('starred')) {
    return unstar(job);
  }
  else {
    return star(job);
  }
};

export default toggleStar;

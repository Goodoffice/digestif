import { MARK_READ } from './types';

export default function(job) {
  return {
    type: MARK_READ,
    job
  };
};


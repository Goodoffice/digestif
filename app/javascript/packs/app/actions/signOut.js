import { SIGN_OUT } from './types';
import apiCall from './apiCall';


const signOut = () => {
  console.log('signed out');
  return apiCall({
    endpoint: `/users/sign_out`,
    method: 'DELETE',
    types: [
      {
          type: SIGN_OUT.REQUEST
      },
      {
          type: SIGN_OUT.SUCCESS,
      },
      {
          type: SIGN_OUT.FAILURE
      }
    ],
  })
};

export default signOut;

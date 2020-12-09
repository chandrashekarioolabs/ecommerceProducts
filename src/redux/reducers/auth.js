import { USER_SIGN_IN_SUCCESS, USER_SIGN_IN_FAILURE } from '../types';

const initialState = { auth: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN_SUCCESS:
      return { ...state, auth: action.payload };
    case USER_SIGN_IN_FAILURE: {
      return { ...state, auth: action.payload };
    }
    default:
      return state;
  }
};

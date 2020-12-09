import {
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../types';
import { auth } from 'Pages/firebase';

export const UserSignIn = (email, password, cb) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: USER_SIGN_IN_SUCCESS, payload: true });
        dispatch({
          type: SUCCESS_MESSAGE,
          payload: {
            message: 'Successfully signed in',
            show: true,
            type: 'success',
          },
        });
        if (cb) cb();
      })
      .catch((err) => {
        dispatch({ type: USER_SIGN_IN_FAILURE, payload: false });
        dispatch({
          type: ERROR_MESSAGE,
          payload: { message: err.message, show: true, type: 'error' },
        });
      });
  };
};

export const userSignOut = (cb) => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: USER_SIGN_IN_FAILURE, payload: false });
        dispatch({
          type: SUCCESS_MESSAGE,
          payload: {
            message: 'Successfully signed out',
            show: true,
            type: 'success',
          },
        });
        if (cb) cb();
      })
      .catch(function (error) {
        dispatch({ type: USER_SIGN_IN_FAILURE, payload: false });
        dispatch({
          type: ERROR_MESSAGE,
          payload: { message: err.message, show: true, type: 'error' },
        });
      });
  };
};

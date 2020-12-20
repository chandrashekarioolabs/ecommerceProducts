import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../types';

const sanckBarMessage = (type) => ({
  type,
  payload: {
    message: '',
    show: false,
    type: '',
  },
});

export const clearSuccessSnackbar = () => {
  return (dispatch) => {
    dispatch(sanckBarMessage(SUCCESS_MESSAGE));
  };
};
export const clearErrorSnackbar = () => {
  return (dispatch) => {
    dispatch(sanckBarMessage(ERROR_MESSAGE));
  };
};

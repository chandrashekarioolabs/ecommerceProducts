import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../types';

const INITIAL_STATE = {
  successSnackbarOpen: false,
  snackbarMessage: '',
  errorSnackbarOpen: false,
  SnackBarType: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return {
        ...state,
        snackbarMessage: action.payload.message,
        errorSnackbarOpen: action.payload.show,
        SnackBarType: action.payload.type,
      };
    case SUCCESS_MESSAGE: {
      return {
        ...state,
        successMessage: action.payload,
        snackbarMessage: action.payload.message,
        successSnackbarOpen: action.payload.show,
        SnackBarType: action.payload.type,
      };
    }
    default:
      return state;
  }
};

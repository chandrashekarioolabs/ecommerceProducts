import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { clearSuccessSnackbar, clearErrorSnackbar } from '../redux/actions';
import MuiAlert from '@material-ui/lab/Alert';

export default function SnackBarMessage() {
  const dispatch = useDispatch();

  const {
    successSnackbarOpen,
    snackbarMessage,
    errorSnackbarOpen,
    SnackBarType,
  } = useSelector((state) => state.snackBar);

  function handleClose() {
    dispatch(clearSuccessSnackbar());
    dispatch(clearErrorSnackbar());
  }

  return (
    <Snackbar
      open={successSnackbarOpen || errorSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant='filled'
        onClose={handleClose}
        severity={SnackBarType}>
        {snackbarMessage}
      </MuiAlert>
    </Snackbar>
  );
}

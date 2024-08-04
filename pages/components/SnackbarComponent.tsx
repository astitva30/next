import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'; // Adjust the path as necessary
import { closeSnackbar } from '../redux/slices/authSlice';

const SnackbarComponent: React.FC = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: RootState) => state.auth.snackbar);

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        severity={snackbar.severity}
        sx={{ width: '100%' }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;

export default function initializeAuthState() {
  
    return {
      token: localStorage.getItem('token'),
      role: localStorage.getItem('role'),
      error: null,
      snackbar: {
        open: false,
        message: '',
        severity: 'success',
      },
    };
  }
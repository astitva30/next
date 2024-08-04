import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the authentication state
interface AuthState {
  token: string | null;
  role: string | null;
  error: string | null;
  snackbar: {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'info'; // Use 'success' or 'error' for Snackbar severity
  };
}

const isClient = typeof window !== 'undefined';

const initialState: AuthState = {
  token: isClient ? localStorage.getItem('token') : null,
  role: isClient ? localStorage.getItem('role') : null,
  error: null,
  snackbar: {
    open: false,
    message: '',
    severity: 'success',
  },
};

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<{ email: string; password: string }>) {},
    loginSuccess(state, action: PayloadAction<{ token: string; role: string }>) {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.error = null;
      state.snackbar = {
        open: true,
        message: 'Login successful!',
        severity: 'success',
      };
      localStorage.setItem("token",action.payload.token);
      localStorage.setItem("role",action.payload.role);
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.snackbar = {
        open: true,
        message: 'Invalid credentials. Please try again.',
        severity: 'error',
      };
    },
    logoutRequest(state) {
      // Optionally handle loading state or reset error
      state.snackbar = {
        open: true,
        message: 'Logging out...',
        severity: 'info',
      };
    },
    logoutSuccess(state) {
      state.token = null;
      state.role = null;
      state.error = null;
      state.snackbar = {
        open: true,
        message: 'Logout successful!',
        severity: 'success',
      };
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
      }
    },
    logoutFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.snackbar = {
        open: true,
        message: 'Failed to logout. Please try again.',
        severity: 'error',
      };
    },
    closeSnackbar(state) {
      state.snackbar.open = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure,closeSnackbar, logoutRequest,logoutSuccess, logoutFailure } = authSlice.actions;
export default authSlice.reducer;

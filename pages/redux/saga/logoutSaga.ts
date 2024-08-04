import { call, put, select, takeEvery } from 'redux-saga/effects';
import { logoutRequest, logoutSuccess, logoutFailure } from '../slices/authSlice';
import { apiLogout } from '../../api/api'; // Import the API function
import { Api } from '@reduxjs/toolkit/query';

// Define the API response type for logout if needed, or use an empty object if no response
interface ApiLogoutResponse {
  // Define properties if the API returns any data, or leave empty if no response
  status:boolean
}

const selectAuthToken = (state: any) => state.auth.token

function* logout(action: ReturnType<typeof logoutRequest>) {
  try {
    const token: string = yield select(selectAuthToken);
    // Call the API to perform logout
    console.log("inside logut");
    const response:ApiLogoutResponse =  yield call(apiLogout, {token});
    // Dispatch success action if logout is successful
    console.log(response);
    console.log("logutSuccessful");
    yield put(logoutSuccess());
  } catch (error) {
    // Handle error and dispatch failure action
    if (error instanceof Error) {
        console.error("Logout failed with error:", error);
      yield put(logoutFailure(error.message));
    }
  }
}

// Watch for logoutRequest actions and trigger the logout saga
export default function* logoutSaga() {
  yield takeEvery(logoutRequest.type, logout);
}

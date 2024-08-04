import { call, put, takeEvery } from 'redux-saga/effects';
import { loginRequest, loginSuccess, loginFailure } from '../slices/authSlice';
import { apiLogin } from '../../api/api'; // Import the API function

// Define the API response type
interface ApiLoginResponse {
  token: string;
  role: string;
}

function* loginSaga(action: ReturnType<typeof loginRequest>) {
  try {
    const response: ApiLoginResponse = yield call(apiLogin, action.payload);
    console.log(response);
    yield put(loginSuccess({ token: response.token, role: response.role }));

  } catch (error) {

    if (error instanceof Error) {
      yield put(loginFailure(error.message));
    }
    
  }
}


export default function* authSaga() {
  //here it is watching for every change in login request that will trigger login saga
  yield takeEvery(loginRequest.type, loginSaga);
}

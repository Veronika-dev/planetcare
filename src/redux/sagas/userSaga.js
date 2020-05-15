import { takeLatest, put, call } from 'redux-saga/effects';
import Types from '../types';
import * as api from '../requests/userRequests';
import { store } from '../store';

export function* getUserData(data) {
  try {
    const { email } = data;
    const state = yield store.getState();
    const token = state.authReducer.token;
    const result = yield call(api.getUserData, email, token);
    if (result.status >= 200 && result.status < 300) {
      yield put({
        type: Types.GET_USER_DATA.SUCCESS,
        userData: result.data.data,
      });
    } else {
      yield put({
        type: Types.GET_USER_DATA.FAILURE,
        error: result.message,
      });
    }
  }
  catch (error) {
    console.log('[PlanetCare] getUserData error:', error);
    yield put({
      type: Types.GET_USER_DATA.FAILURE,
      error: error,
    });
  }
}

export default function* userSaga() {
  yield takeLatest(Types.GET_USER_DATA.REQUEST, getUserData);
}

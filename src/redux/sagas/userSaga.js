import { takeLatest, put, call } from 'redux-saga/effects';
import Types from '../types';
import * as api from '../requests/userRequests';
import { store } from '../store';

export function* getUserData() {
  try {
    const state = yield store.getState();
    const token = state.authReducer.token;
    const result = yield call(api.getUserData, token);
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

export function* updateUserData(data) {
  try {
    const { form } = data;
    const state = yield store.getState();
    const token = state.authReducer.token;
    const result = yield call(api.updateUserData, form, token);
    if (result.status >= 200 && result.status < 300) {
      yield put({
        type: Types.UPDATE_USER_DATA.SUCCESS,
        userData: result.data.data,
      });
    } else {
      yield put({
        type: Types.UPDATE_USER_DATA.FAILURE,
        error: result.message,
      });
    }
  }
  catch (error) {
    console.log('[PlanetCare] updateUserData error:', error);
    yield put({
      type: Types.UPDATE_USER_DATA.FAILURE,
      error: error,
    });
  }
}

export default function* userSaga() {
  yield takeLatest(Types.GET_USER_DATA.REQUEST, getUserData);
  yield takeLatest(Types.UPDATE_USER_DATA.REQUEST, updateUserData);
}

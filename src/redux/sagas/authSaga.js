import { CommonActions } from '@react-navigation/native';
import { takeLatest, put, call } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import Types from '../types';
import * as api from '../requests/authRequests';
import AsyncStorage from '@react-native-community/async-storage';

import { getUserData } from './userSaga';
import { store } from '../store';

function* fetchAuthCode(data) {
  try {
    const { email } = data;
    const result = yield call(api.getAuthCode, email);
    console.log('result', result);
    if (result.status >= 200 && result.status < 300) {
      yield put({
        type: Types.GET_CODE.SUCCESS,
      });
    } else {
      yield put({
        type: Types.GET_CODE.FAILURE,
        error: result.message,
      });
    }
  }
  catch (error) {
    console.log('[PlanetCare] fetchAuthCode error:', error);
    yield put({
      type: Types.GET_CODE.FAILURE,
      error: error,
    });
  }
}
// Вход или регистрация
function* login(data) {
  try {
    const { email, code, nav } = data;
    const result = yield call(api.login, email, code);
    if (result.status >= 200 && result.status < 300) {
      yield AsyncStorage.setItem('token', result.data.token);
      yield put({
        type: Types.LOGIN.SUCCESS,
        token: result.data.token,
      });
      nav.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Main' },
          ],
        })
      );
      yield getUserData({ email });
    } else {
      yield put({
        type: Types.LOGIN.FAILURE,
        error: result.message,
      });
    }
  }
  catch (error) {
    console.log('[PlanetCare] login error:', error);
    yield put({
      type: Types.LOGIN.FAILURE,
      error: error,
    });
  }
}

function* setToken() {
  try {
    const token = yield AsyncStorage.getItem('token');
    if (token) {
      yield put({
        type: Types.SET_TOKEN.SUCCESS,
        token,
      });
      const data = yield jwt_decode(token);
      yield getUserData(data);
    }
  }
  catch (error) {
    console.log('[PlanetCare] login error:', error);
    yield put({
      type: Types.SET_TOKEN.FAILURE,
      error: error,
    });
  }
}
// Выход
function* logout(data) {
  try {
    const state = yield store.getState();
    const token = state.authReducer.token;
    const result = yield call(api.logout, token);
    console.log('result', result);
    if (result.status >= 200 && result.status < 300) {
      const { nav } = data;
      yield AsyncStorage.removeItem('token');
      yield put({
        type: Types.LOGOUT.SUCCESS,
      });
      nav.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Main' },
            { name: 'Authorization' },
          ],
        })
      );
    } else {
      yield put({
        type: Types.LOGOUT.FAILURE,
        error: result.message,
      });
    }
  }
  catch (error) {
    console.log('[PlanetCare] login error:', error);
    yield put({
      type: Types.LOGOUT.FAILURE,
      error: error,
    });
  }
}

export default function* authSaga() {
  yield takeLatest(Types.GET_CODE.REQUEST, fetchAuthCode);
  yield takeLatest(Types.LOGIN.REQUEST, login);
  yield takeLatest(Types.LOGOUT.REQUEST, logout);
  yield takeLatest(Types.SET_TOKEN.REQUEST, setToken);
}

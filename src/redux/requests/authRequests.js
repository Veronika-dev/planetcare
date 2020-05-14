import axios from 'axios';

import { host, getHeaders } from '../constants';

// Получение кода авторизации
export const getAuthCode = email =>
  axios.post(`${host}login/step1`, {
    email,
  }, {
    headers: getHeaders(),
  })
    .then(result =>
      result,
    )
    .catch(error =>
      error.response,
    );

// Вход
export const login = (email, code) =>
  axios.post(`${host}login/step2`, {
    email,
    code,
  }, {
    headers: getHeaders(),
  })
    .then(result =>
      result,
    )
    .catch(error =>
      error.response,
    );

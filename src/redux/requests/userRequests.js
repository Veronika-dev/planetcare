import axios from 'axios';

import { host, getHeaders } from '../constants';

// Получение данных пользователя
export const getUserData = (token) =>
  axios.get(`${host}user/info`, {
    headers: getHeaders(token),
  })
    .then(result =>
      result,
    )
    .catch(error =>
      error.response,
    );

// Обновление данных пользователя
export const updateUserData = (data, token) =>
  axios.put(`${host}user/info`, data, {
    headers: getHeaders(token),
  })
    .then(result =>
      result,
    )
    .catch(error =>
      error.response,
    );

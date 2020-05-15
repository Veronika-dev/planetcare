import axios from 'axios';

import { host, getHeaders } from '../constants';

// Получение данных пользователя
export const getUserData = (email, token) =>
  axios.get(`${host}user/info?email=${email}`, {
    headers: getHeaders(token),
  })
    .then(result =>
      result,
    )
    .catch(error =>
      error.response,
    );

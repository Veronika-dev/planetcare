import Types from '../types';
// Получение кода авторизации на почту
export const getAuthCode = email => ({
  type: Types.GET_CODE.REQUEST,
  email,
});
// Вход
export const login = (email, code, nav) => ({
  type: Types.LOGIN.REQUEST,
  email, code, nav,
});
// Запись токена в redux
export const setToken = () => ({
  type: Types.SET_TOKEN.REQUEST,
});
// Выход
export const logout = (nav) => ({
  type: Types.LOGOUT.REQUEST,
  nav,
});

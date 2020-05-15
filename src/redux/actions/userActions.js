import Types from '../types';

// Получение данных пользователя
export const getUserData = email => ({
  type: Types.GET_USER_DATA.REQUEST,
  email,
});
// Обновление данных пользователя
export const updateUserData = form => ({
  type: Types.UPDATE_USER_DATA.REQUEST,
  form,
});

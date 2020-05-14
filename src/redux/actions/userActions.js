import Types from '../types';

export const getUserData = email => ({
  type: Types.GET_USER_DATA.REQUEST,
  email,
});

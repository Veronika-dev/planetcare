export const host = 'http://localhost:8001/';

export const getHeaders = (token) => {
  console.log('token', token);
  return Object.assign({}, {
    'Content-Type': 'application/json',
  }, token ? {
    Authorization: `Bearer ${token}`,
  } : {});
};

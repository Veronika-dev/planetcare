// import { store } from './store';

export const host = 'http://localhost:8001/';

export const getHeaders = async () => {
  // const token = await store.getItem('token');
  return {
    // Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

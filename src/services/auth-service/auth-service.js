import { axiosInstance, setTokenAuth, dellTokenAuth } from '../../api/api';

export const signInUser = async body => {
  return await axiosInstance.post('/users/signup', body);
};

export const loginUser = async body => {
  const { data } = await axiosInstance.post('users/login', body);
  setTokenAuth(`Bearer ${data.token}`);
  return data;
};

export const getProfile = async () => {
  const { data } = await axiosInstance.get('users/current');
  return data;
};

export const logOutUser = async () => {
  await axiosInstance.post('users/logout');
  dellTokenAuth();
};

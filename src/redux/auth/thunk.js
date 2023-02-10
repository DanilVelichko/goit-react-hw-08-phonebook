import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
} from '../../services/auth-service/auth-service';

export const authThunk = createAsyncThunk(
  'users/login',
  async (payload, { dispatch }) => {
    const data = await loginUser(payload);
    console.log('user/login', data);

    dispatch(profileThunk());
    return data;
  }
);

export const profileThunk = createAsyncThunk('auth/profile', () => {
  return getProfile();
});

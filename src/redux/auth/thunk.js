import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
} from '../../services/auth-service/auth-service';

export const authThunk = createAsyncThunk(
  'auth/login',
  async (payload, { dispatch }) => {
    const data = await loginUser(payload);
    console.log('auth/login', data);

    dispatch(profileThunk());
    return data;
  }
);

export const profileThunk = createAsyncThunk('auth/profile', () => {
  return getProfile();
});

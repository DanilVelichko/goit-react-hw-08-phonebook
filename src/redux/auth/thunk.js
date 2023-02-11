import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
} from '../../services/auth-service/auth-service';

export const authThunk = createAsyncThunk(
  'auth/login',
  async (payload, { dispatch }) => {
    const data = await loginUser(payload);
    dispatch(profileThunk());
    return data;
  }
);

export const profileThunk = createAsyncThunk('auth/profile', () => {
  return getProfile();
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
  logOutUser,
} from '../../services/auth-service/auth-service';
import { fetchContacts } from 'redux/contacts/operations';

export const authThunk = createAsyncThunk(
  'auth/login',
  async (payload, { dispatch }) => {
    const data = await loginUser(payload);
    dispatch(profileThunk());
    dispatch(fetchContacts());

    return data;
  }
);

export const profileThunk = createAsyncThunk('auth/profile', () => {
  return getProfile();
});

export const logOutThunk = createAsyncThunk('auth/logout', async () => {
  await logOutUser();
});
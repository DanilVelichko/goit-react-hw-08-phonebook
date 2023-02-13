import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
  logOutUser,
  signInUser
} from '../../services/auth-service/auth-service';



export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (payload, _) => {
    const data = await signInUser(payload);
    return data;
  }
);

export const authThunk = createAsyncThunk(
  'auth/login',
  async (payload,_) => {
    const data = await loginUser(payload);
    return data;
  }
);

export const profileThunk = createAsyncThunk('auth/profile', () => {
  
  return getProfile();
});

export const logOutThunk = createAsyncThunk('auth/logout', async () => {
  await logOutUser();
});

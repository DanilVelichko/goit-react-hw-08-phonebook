import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  loginUser,
  logOutUser,
  signInUser
} from '../../services/auth-service/auth-service';
import { setTokenAuth } from '../../api/api';



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

export const profileThunk = createAsyncThunk('auth/profile', (_, thunkAPI) => {
   const state = thunkAPI.getState();
    const token = state.auth.access_token;

    if (token) {
      setTokenAuth(`Bearer ${token}`);
    } else return;
  return getProfile();
});

export const logOutThunk = createAsyncThunk('auth/logout', async () => {
  await logOutUser();
});

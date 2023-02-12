import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { authThunk, profileThunk, logOutThunk } from './thunk';
import { persistConfig } from './persistConfig';
import persistReducer from 'redux-persist/es/persistReducer';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleAuthFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.access_token = payload.token;
  state.profile.name = payload.user.name;
  state.profile.email = payload.user.email;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleProfileFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.profile.name = payload.name;
  state.profile.email = payload.email;
  state.error = '';
};

const handleLogOutFullfilled = state => {
  state.isLoading = false;
  state.profile.name = '';
  state.profile.email = '';
  state.error = '';
  state.access_token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authThunk.fulfilled, handleAuthFulfilled)
      .addCase(profileThunk.fulfilled, handleProfileFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFullfilled)
      .addMatcher(
        isAnyOf(profileThunk.pending, authThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(profileThunk.rejected, authThunk.rejected),
        handleError
      );
  },
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

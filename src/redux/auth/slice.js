import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { authThunk, profileThunk } from './thunk'

import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleAuthFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.error = ''
	state.access_token = payload.access_token
}

const handleError = (state, action) => {
	state.isLoading = false
	state.error = action.error.message
}

const handleProfileFulfilled = (state, { payload }) => {
	state.isLoading = false
	state.profile.name = payload.name
	state.profile.email = payload.email
	state.error = ''
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logOutAction: (state) => {
			state.isLoading = false
			state.profile.name = ''
			state.profile.email = ''
			state.error = ''
			state.access_token = ''
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authThunk.fulfilled, handleAuthFulfilled)
			.addCase(profileThunk.fulfilled, handleProfileFulfilled)
			.addMatcher(
				isAnyOf(profileThunk.pending, authThunk.pending),
				handlePending
			)
			.addMatcher(
				isAnyOf(profileThunk.rejected, authThunk.rejected),
				handleError
			)
	},
})

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['access_token'],
}

export const { logOutAction } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);

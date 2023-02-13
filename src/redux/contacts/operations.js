import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/api';
import { setTokenAuth } from '../../api/api';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.access_token;

    if (token) {
      setTokenAuth(`Bearer ${token}`);
    } else return;
    
    try {
         const response = await axiosInstance.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/contacts', { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (Id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/contacts/${Id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

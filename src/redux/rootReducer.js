import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/sliceContacts';
import { filterSlice } from './filter/sliceFilter';
import { authReducer } from './auth/sliceAuth';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: authReducer,
});

export default rootReducer;

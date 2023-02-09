import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/sliceContacts';
import { filterSlice } from './filter/sliceFilter';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
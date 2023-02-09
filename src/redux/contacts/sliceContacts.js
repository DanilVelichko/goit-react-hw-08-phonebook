import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContact } from 'redux/contacts/operations';

const extraActions = [fetchContacts, addContacts, deleteContact];
const createExtraAct = type => extraActions.map(action => action[type]);
const handleFetchContacts = (state, action) => {
  state.items = action.payload;
};
const handleAddContacts = (state, action) => {
  state.items.push(action.payload);
};
const handleDeleteContact = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const handleFullfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContacts.fulfilled, handleAddContacts)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(isAnyOf(...createExtraAct('fulfilled')), handleFullfilled)
      .addMatcher(isAnyOf(...createExtraAct('pending')), handlePending)
      .addMatcher(isAnyOf(...createExtraAct('rejected')), handleRejected);
  },
});

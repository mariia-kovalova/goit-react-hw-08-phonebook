import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  contactsActions,
} from './operations';

const getActions = type => contactsActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(item => item.id === payload.id);
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

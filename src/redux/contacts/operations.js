import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'api/phonebookAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await ContactsAPI.getContacts();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, { rejectWithValue }) => {
    try {
      return await ContactsAPI.addContact(formData);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (formData, { rejectWithValue }) => {
    try {
      return await ContactsAPI.updateContact(formData);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await ContactsAPI.deleteContact(id);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const contactsActions = [
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
];

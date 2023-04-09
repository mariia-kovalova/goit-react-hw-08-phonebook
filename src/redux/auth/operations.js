import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'api/phonebookAPI';

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      return await UserAPI.register(credentials);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await UserAPI.login(credentials);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await UserAPI.logout();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) return rejectWithValue('Unable to fetch user');

    try {
      return await UserAPI.refresh(persistedToken);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';

export const refreshTheme = createAsyncThunk(
  'theme/refresh',
  async (_, { getState }) => {
    const state = getState();
    const persistedMode = state.theme.mode;
    return persistedMode === null ? 'light' : persistedMode;
  }
);

export const toggleTheme = createAsyncThunk(
  'theme/toggle',
  async (_, { getState }) => {
    const state = getState();
    const persistedMode = state.theme.mode;
    return persistedMode === 'light' ? 'dark' : 'light';
  }
);

export const themeActions = [refreshTheme, toggleTheme];

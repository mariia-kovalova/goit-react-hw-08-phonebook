import { createAsyncThunk } from '@reduxjs/toolkit';
import { DARK, LIGHT } from 'consts/theme';

export const refreshTheme = createAsyncThunk(
  'theme/refresh',
  async (_, { getState }) => {
    const state = getState();
    const persistedMode = state.theme.mode;
    return persistedMode === null ? LIGHT : persistedMode;
  }
);

export const toggleTheme = createAsyncThunk(
  'theme/toggle',
  async (_, { getState }) => {
    const state = getState();
    const persistedMode = state.theme.mode;
    return persistedMode === LIGHT ? DARK : LIGHT;
  }
);

export const themeActions = [refreshTheme, toggleTheme];

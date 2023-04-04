import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { themeActions } from './operations';

const getActions = type => themeActions.map(action => action[type]);

const initialState = { mode: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  extraReducers(builder) {
    builder.addMatcher(
      isAnyOf(...getActions('fulfilled')),
      (state, { payload }) => {
        state.mode = payload;
      }
    );
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

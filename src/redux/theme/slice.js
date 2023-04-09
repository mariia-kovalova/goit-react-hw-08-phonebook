import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { themeActions } from './operations';
import { LIGHT } from 'consts/theme';

const getActions = type => themeActions.map(action => action[type]);

const initialState = { mode: LIGHT };

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

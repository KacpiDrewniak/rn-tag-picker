import {createSlice} from '@reduxjs/toolkit';

type tagSliceType = {
  tab: number;
};

const initialState: tagSliceType = {tab: 0};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    next: state => {
      state.tab = state.tab + 1;
    },
    previous: state => {
      state.tab = state.tab - 1;
    },
    reset: state => {
      state.tab = 0;
    },
  },
});

export const {next, previous, reset} = tabSlice.actions;

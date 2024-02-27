import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {tagSlice} from './slices';
import {tabSlice} from './slices/tabSlice.ts';

const appReducer = combineReducers({
  tags: tagSlice.reducer,
  tab: tabSlice.reducer,
});

export const store = configureStore({reducer: appReducer});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

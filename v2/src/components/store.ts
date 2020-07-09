import { configureStore } from '@reduxjs/toolkit';
import activateMenuReducer from '../features/activateMenuSlice';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    activate: activateMenuReducer,
  }
});
export default store

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

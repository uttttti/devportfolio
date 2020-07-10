import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import drawerSliceReducer from '../features/drawerSlice';

const store = configureStore({
  reducer: {
    isOpen: drawerSliceReducer
  }
});
export default store

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../components/store';

export type drawerState = {
  value: boolean
}
const initialState = {
  value: false
}
export const drawerSlice = createSlice({
  name: 'isOpen',
  initialState,
  reducers: {
    openDrawer: state => {
      state.value = true
    },
    closeDrawer: state => {
      state.value = false
    },
    changeDrawer: (state, action:PayloadAction<drawerState['value']>)  => {
      state.value = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, changeDrawer } = drawerSlice.actions;

export const selectDrawer = (state: RootState) => {
  return state.isOpen.value;
}

export default drawerSlice.reducer;

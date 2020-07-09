import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../components/store';

export type activateMenuState = {
  value: string
}
const initialState = {
  value: 'About'
}
export const activateMenuSlice = createSlice({
  name: 'activate',
  initialState,
  reducers: {
    changeActivateMenu: (state, action:PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeActivateMenu } = activateMenuSlice.actions;

export const selectActivateMenu = (state: RootState) => {
  return state.activate.value;
}

export default activateMenuSlice.reducer;

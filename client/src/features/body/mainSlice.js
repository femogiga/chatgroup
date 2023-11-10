import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    content: '',
    channelName: '',
    channelDescription: '',
  },
  reducers: {
    setInputValue: (state, action) => {
      const { fieldName, value } = action.payload;
      state[fieldName] = value;
    },
    clearInput: (state, action) => {
      const { fieldName } = action.payload;
      state[fieldName] = '';
    },
  },
});

export const { setInputValue, clearInput } = mainSlice.actions;
export default mainSlice.reducer;

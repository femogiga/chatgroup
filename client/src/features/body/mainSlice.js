import { createSlice } from '@reduxjs/toolkit';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    content: '',
    channelName: '',
    channelDescription: '',
    email: '',
    password: '',
    authenticatedState: false,
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
    setAuthenticatedState: (state, action) => {
      state.authenticatedState = action.payload;
    },
  },
});

export const { setInputValue, clearInput, setAuthenticatedState } =
  mainSlice.actions;
export default mainSlice.reducer;

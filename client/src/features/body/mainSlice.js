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
    authData:null
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
    setAuthData: (state, action) => {
      state.authData = action.payload;
    }
  },
});

export const { setInputValue, clearInput, setAuthenticatedState, setAuthData } =
  mainSlice.actions;
export default mainSlice.reducer;

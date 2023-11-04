import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    accountModalVisible: false,
    listToShow : false
  },
  reducers: {
    setAccountModalVisible: (state) => {
      state.accountModalVisible = !state.accountModalVisible;
    },
    setListToShow: (state,action) => {
      state.listToShow = action.payload;
    }
  },
});

export const { setAccountModalVisible, setListToShow } = sidebarSlice.actions;

export default sidebarSlice.reducer;

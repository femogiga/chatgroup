import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    accountModalVisible: false,
  },
  reducers: {
    setAccountModalVisible: (state) => {
      state.accountModalVisible = !state.accountModalVisible;
    },
  },
});

export const { setAccountModalVisible } = sidebarSlice.actions;

export default sidebarSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    accountModalVisible: false,
    sidebarToShow: false,
    roomId:1,
  },
  reducers: {
    setAccountModalVisible: (state) => {
      state.accountModalVisible = !state.accountModalVisible;
    },
    setSidebarToShow: (state,action) => {
      state.sidebarToShow = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    }
  },
});

export const { setAccountModalVisible, setSidebarToShow,setRoomId } = sidebarSlice.actions;

export default sidebarSlice.reducer;

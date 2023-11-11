import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    accountModalVisible: false,
    loginlogoutstatus: true,
    loginModalStatus : false,
    sidebarToShow: false,
    roomId: 1,
    addChannelButtonStatus: false,
  },
  reducers: {
    setAccountModalVisible: (state) => {
      state.accountModalVisible = !state.accountModalVisible;
    },
    setSidebarToShow: (state, action) => {
      state.sidebarToShow = action.payload;
    },
    setRoomId: (state, action) => {
      state.roomId = action.payload;
    },
    setAddChannelButtonStatus: (state, action) => {
      state.addChannelButtonStatus = action.payload;
    },
    setLoginLogoutStatus: (state, action) => {
      state.loginlogoutstatus = action.payload
    },
    setLoginModalStatus: (state,action) => {
      state.loginModalStatus = action.payload
    }
  },
});

export const {
  setAccountModalVisible,
  setSidebarToShow,
  setRoomId,
  setAddChannelButtonStatus,
  setLoginLogoutStatus,
  setLoginModalStatus
} = sidebarSlice.actions;

export default sidebarSlice.reducer;

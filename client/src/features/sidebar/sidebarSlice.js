import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    accountModalVisible: false,
    loginlogoutstatus: true,
    loginModalStatus: false,
    registerModalStatus: false,
    profileModalStatus: false,
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
    },
    setRegisterModalStatus: (state, action) => {
      state.registerModalStatus = action.payload
    },
    setProfileModalStatus: (state, action) => {
      state.profileModalStatus = action.payload
     }

  },
});

export const {
  setAccountModalVisible,
  setSidebarToShow,
  setRoomId,
  setAddChannelButtonStatus,
  setLoginLogoutStatus,
  setLoginModalStatus,
  setRegisterModalStatus,
  setProfileModalStatus,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;

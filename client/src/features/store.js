import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebar/sidebarSlice';
import mainReducer from './body/mainSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    main: mainReducer,
  },
});

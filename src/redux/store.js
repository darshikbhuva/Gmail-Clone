import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/appSlice";

const store = configureStore({
  reducer: {
    appSlice: appSlice,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: [],
    selectedEmail: null,
    searchText: null,
    user: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUSer: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setOpen, setEmails, setSelectedEmail, setSearchText, setUSer } =
  appSlice.actions;
export default appSlice.reducer;

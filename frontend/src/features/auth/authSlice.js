import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: { refresh_token: null, token: null },
  reducers: {
    setCredentials: (state, { payload: { refresh_token, token } }) => {
      state.refresh_token = refresh_token;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = state.auth.user;

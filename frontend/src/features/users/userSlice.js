import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  tokenUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setTokenUser: (state, action) => {
      state.tokenUser = action.payload;
    },
  },
});

export const { setUser, setTokenUser } = userSlice.actions;
export default userSlice.reducer;

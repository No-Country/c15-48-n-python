import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    tokenUser: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setTokenUser: (state, action) => {
      state.tokenUser = action.payload;
    },
    setUserPets: (state, action) => {

    },
  },
//   setError: (state, action) => {
//     state.error = action.payload;
//   },
});

export const { setUser, setTokenUser } = userSlice.actions;
export default userSlice.reducer;
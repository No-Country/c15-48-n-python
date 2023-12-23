import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./features/users/userSlice.js";
// import rootReducer from './reducer';
// export const store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

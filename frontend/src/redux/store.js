import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from './userSlice.js';
// import rootReducer from './reducer';
// export const store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});

export default store;
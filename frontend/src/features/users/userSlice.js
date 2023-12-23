import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// let usersUrl = "http://127.0.0.1:8000/api/user/";

// export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
//   const response = await axios.post(usersUrl, userData);
//   return response.data;
// });

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

// import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
// import { addItem, removeItem, clearItems, toggleAmount } from './cartSlice';
// import { setCartStorage } from '../../utils/helpers';

// export const cartMiddleware = createListenerMiddleware();

// // copies cart contents into localStorage to avoid using a backend.
// cartMiddleware.startListening({
// matcher: isAnyOf(addItem, removeItem, clearItems, toggleAmount),
// effect: (action, listenerAPI) => {
// setCartStorage(listenerAPI.getState().cart.cart);
// },
// });

// card slice
// import { createSlice } from '@reduxjs/toolkit';
// import { calculateTotals, getCartStorage } from '../../utils/helpers';

// const cart = getCartStorage();
// const { totalItems, totalAmount } = calculateTotals(cart);

// const initialState = {
// cart,
// totalItems,
// totalAmount,
// shippingFee: 534,
// };

// const cartSlice = createSlice({
// name: 'cart',
// initialState,
// reducers: {
// addItem: (state, action) => {
// const { id, color, amount, product } = action.payload;
// let tempItemIndex;
// const tempItem = state.cart.find((item, index) => {
// if (item.id === id + color) {
// tempItemIndex = index;
// // console.log(index);
// }
// return item.id === id + color;
// });
// // console.log(tempItem);
// if (tempItem) {
// let newAmount = tempItem.amount + amount;
// if (newAmount > tempItem.max) {
// state.cart[tempItemIndex].amount = tempItem.max;
// } else {
// state.cart[tempItemIndex].amount = newAmount;
// }
// } else {
// const newItem = {
// id: id + color,
// name: product.name,
// color,
// amount,
// image: product.images[0].url,
// price: product.price,
// max: product.stock,
// };
// state.cart.push(newItem);
// const { totalItems, totalAmount } = calculateTotals(state.cart);
// state.totalItems = totalItems;
// state.totalAmount = totalAmount;
// }
// },
// removeItem: (state, action) => {
// console.log('removing item');
// state.cart = state.cart.filter((item) => item.id != action.payload);
// const { totalItems, totalAmount } = calculateTotals(state.cart);
// state.totalItems = totalItems;
// state.totalAmount = totalAmount;
// },
// toggleAmount: (state, action) => {
// const { id, value } = action.payload;
// const itemIndex = state.cart.findIndex((item) => item.id === id);
// console.log(id, value);
// let newAmount;
// if (value === 'inc') {
// newAmount = state.cart[itemIndex].amount + 1;
// if (newAmount > state.cart[itemIndex].max) {
// newAmount = state.cart[itemIndex].max;
// }
// } else if (value === 'dec') {
// newAmount = state.cart[itemIndex].amount - 1;
// }
// if (newAmount < 1) {
// state.cart.splice(itemIndex, 1);
// } else {
// state.cart[itemIndex].amount = newAmount;
// }
// const { totalItems, totalAmount } = calculateTotals(state.cart);
// state.totalItems = totalItems;
// state.totalAmount = totalAmount;
// },
// clearItems: (state, _action) => {
// console.log('clearing cart');
// state.cart = [];
// const { totalItems, totalAmount } = calculateTotals(state.cart);
// state.totalItems = totalItems;
// state.totalAmount = totalAmount;
// },
// },
// });

// export const { addItem, removeItem, toggleAmount, clearItems } =
// cartSlice.actions;

// export default cartSlice.reducer;

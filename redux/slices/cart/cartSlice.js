import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: {
			cartLength: 0,
			totalPrice: 0,
			data: []
		}
	},
	reducers: {
		handleAddToCart: (state, action) => {
			state.cart.data = [...state.cart.data, action.payload.data];
			state.cart.totalPrice = action.payload.totalPrice;
			state.cart.cartLength = state.cart.data.length;
		},
		handleDeleteCartItem: (state, action) => {
			let productPrice = state.cart.data.find(item => item.id === +action.payload);
			state.cart.data = state.cart.data.filter(item => item.id !== +action.payload);
			state.cart.totalPrice = state.cart.totalPrice - +productPrice.productPrice - +productPrice.additionalPrice;
			state.cart.cartLength -= 1;
		},
	}
});

export const { handleAddToCart, handleDeleteCartItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
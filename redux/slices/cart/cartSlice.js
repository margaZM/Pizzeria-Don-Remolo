import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: {
			totalPrice: 0,
			data: []
		}
	},
	reducers: {
		handleAddToCart: (state, action) => {
			state.cart.data = [...state.cart.data, action.payload.data];
			state.cart.totalPrice = action.payload.totalPrice;
		}
	}
});

export const { handleAddToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
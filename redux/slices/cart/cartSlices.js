import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [],
};

const productsCartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart: (state, action) => {
			state.cart = action.payload;
		},
		setActionTypeCart: (state, action) => {
			state.cart.map((product) => {
				product.id === action.payload.id
					? (product.actionType = action.payload)
					: product;
			});
		},
		setDeleteProductCart: (state, action) => {
			state.cart = state.cart.filter((product) => product.id !== action.payload);
		},
		setPlusProductCart: (state, action) => {
			state.cart.map((product) => {
				product.id === action.payload ? product.quantity++ : product;
			});
		},
		setMinusProductCart: (state, action) => {
			state.cart.map((product) => {
				if (product.id === action.payload) {
					if (product.quantity === 1) {
						state.cart = state.cart.filter((product) => {
							product.id !== action.payload ? product.quantity++ : product;
						});
					}
					product.quantity--;
				} else {
					product;
				}
			});
		},
	},
});

export const selectTotalProductPrice = (state) => {
	return Object.values(state.productsCart.cart).reduce(
		(acc, item) => acc + Number(item.quantity) * Number(item.productPrice),
		0,
	);
};

export const {
	setCart,
	setDeleteProductCart,
	setMinusProductCart,
	setPlusProductCart,
	setActionTypeCart,
} = productsCartSlice.actions;

export const productsCartReducer = productsCartSlice.reducer;

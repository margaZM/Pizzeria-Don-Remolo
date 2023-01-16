import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedProduct: null,
};

const selectedProductsSlice = createSlice({
	name: 'selected-products',
	initialState,
	reducers: {
		setSelectedProduct: (state, action) => {
			state.selectedProduct = action.payload;
		},
		setActionTypeProduct: (state, action) => {
			productToUpdate = state.cart.find((item) => item.id === action.payload.id);
			state.selectedProduct = { ...productToUpdate, action: action.payload.action };
		},
		setSelectedProductCounter: (state, action) => {
			if (action.payload === 'increase') {
				state.selectedProduct.quantity = +state.selectedProduct.quantity + 1;
			} else if (action.payload === 'decrease') {
				state.selectedProduct.quantity = +state.selectedProduct.quantity - 1;
			}
		},
		setDetailPromo: (state, action) => {
			if (state.selectedProduct) state.selectedProduct.detailPromo = action.payload;
		},
		setDetailPopulars: (state, action) => {
			if (state.selectedProduct) state.selectedProduct.detailPopulars = action.payload;
		},
	},
});

export const {
	setSelectedProduct,
	setDetailPromo,
	setDetailPopulars,
	setSelectedProductCounter,
	setActionTypeProduct,
} = selectedProductsSlice.actions;
export const selectedProductsReducer = selectedProductsSlice.reducer;

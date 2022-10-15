import { createSlice } from '@reduxjs/toolkit';

const selectedProductSlice = createSlice({
	name: 'selected-product-slice',
	initialState: {
		selectedProduct: null,
	},
	reducers: {
		handleSelectedProduct: (state, action) => {
			const title = action?.payload?.data?.name || action?.payload?.data?.title;
			const price = action?.payload?.data?.promotionalPrice || action?.payload?.data?.price;
			if (action.payload.selected) {
				state.selectedProduct = {
					...action.payload.data,
					title,
					price
				};
			} else if (!action.payload.selected) {
				state.selectedProduct = null;
			}
		},
		handleSelectedProductCounter: (state, action) => {
			if (action.payload === 'increase') {
				state.selectedProduct.quantity = +state.selectedProduct.quantity + 1;
			} else if (action.payload === 'decrease') {
				state.selectedProduct.quantity = +state.selectedProduct.quantity - 1;
			}
		},
		setDetailPromo: (state, action) => {
			state.selectedProduct.detailPromo = action.payload;
		},
	},
});

export const { handleSelectedProduct, handleSelectedProductCounter, setDetailPromo } =
	selectedProductSlice.actions;
export const selectedProductReducer = selectedProductSlice.reducer;

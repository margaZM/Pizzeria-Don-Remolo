import { createSlice } from '@reduxjs/toolkit';

const selectedProductSlice = createSlice({
	name: "selected-product-slice",
	initialState: {
		selectedProduct: null,
	},
	reducers: {
		handleSelectedProduct: (state, action) => {
			if(action.payload.selected) {
				state.selectedProduct = action.payload.data;
			} else if(!action.payload.selected) {
				state.selectedProduct = null;
			}
		},
		handleSelectedProductCounter: (state, action) => {
			if(action.payload === "increase") { 
				state.selectedProduct.quantity = +state.selectedProduct.quantity + 1 
			} else if(action.payload === "decrease") { state.selectedProduct.quantity = +state.selectedProduct.quantity - 1 }
		},
	},
});

export const { handleSelectedProduct, handleSelectedProductCounter } = selectedProductSlice.actions;
export const selectedProductReducer = selectedProductSlice.reducer;
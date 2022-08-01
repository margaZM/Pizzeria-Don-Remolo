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
			}
		},
	},
});

export const { handleSelectedProduct } = selectedProductSlice.actions;
export const selectedProductReducer = selectedProductSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	promotions: null,
	populars: null,
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setPromotions: (state, action) => {
			state.promotions = action.payload;
		},
		setPopulars: (state, action) => {
			state.populars = action.payload;
		},
	},
});

export const { setPromotions, setPopulars } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

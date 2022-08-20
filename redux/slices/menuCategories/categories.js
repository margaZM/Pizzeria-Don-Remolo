import { createSlice } from '@reduxjs/toolkit';
import { getProductsByCategory } from '/services/product-services/productServices.js';

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		category: {
			pizzas: {},
			empanadas: {},
			postres: {},
			bebidas: {},
		},
	},
	reducers: {
		setMenuByCategory: (state, action) => {
			state.category[action.payload.category] = action.payload;
		},
	},
});

export const getMenuByCategory = (category) => (dispatch) => {
	getProductsByCategory(category)
		.then((response) => {
			dispatch(setMenuByCategory({ ...response.data, category: category.category }));
		})
		.catch((error) => console.log(error));
};

export const { setMenuByCategory } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;

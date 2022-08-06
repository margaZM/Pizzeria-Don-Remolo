import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	promotions: false,
	pizzas: false,
	empanadas: false,
	drinks: false,
	desserts: false,
	currentView: "",
};

const menuCategoriesSlice = createSlice({
	name: "menuCategories",
	initialState: {
		...initialState,
		promotions: true,
		currentView: "promotions"
	},
	reducers: {
		handleMenuCategory: (state, action) => {
			return { ...initialState, [action.payload]: true, currentView: action.payload }
		},
	},
});

export const { handleMenuCategory } = menuCategoriesSlice.actions;
export const menuCategoriesReducer = menuCategoriesSlice.reducer;
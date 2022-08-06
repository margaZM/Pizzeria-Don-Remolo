import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/auth';
import { cartReducer } from '../slices/cart/cartSlice';
import { menuCategoriesReducer } from '../slices/menuCategories/menuCategoriesSlice';
import { modalReducer } from '../slices/modal/modalSlice';
import { resetPasswordReducer } from '../slices/reset-password/resetPasswordSlice';
import { selectedProductReducer } from '../slices/selectedProduct/selectedProductSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		resetPassword: resetPasswordReducer,
		selectedProduct: selectedProductReducer,
		cart: cartReducer,
		menuCategories: menuCategoriesReducer,
	},
});
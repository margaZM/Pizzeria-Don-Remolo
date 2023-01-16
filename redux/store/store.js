import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/auth';
import { cartReducer } from '../slices/cart/cartSlice';
import { productsCartReducer } from '../slices/cart/cartSlices';
import { menuCategoriesReducer } from '../slices/menuCategories/menuCategoriesSlice';
import { modalReducer } from '../slices/modal/modalSlice';
import { resetPasswordReducer } from '../slices/reset-password/resetPasswordSlice';
import { selectedProductReducer } from '../slices/selectedProduct/selectedProductSlice';
import { selectedProductsReducer } from '/redux/slices/selectedProduct/selectedProductsSlice.js';
import { productsReducer } from '../slices/products/productsSlice';

import { categoriesReducer } from '../slices/menuCategories/categories';

export const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		resetPassword: resetPasswordReducer,
		selectedProduct: selectedProductReducer,
		selectedProducts: selectedProductsReducer,
		cart: cartReducer,
		menuCategories: menuCategoriesReducer,
		categories: categoriesReducer,
		productsCart: productsCartReducer,
		products: productsReducer,
	},
});

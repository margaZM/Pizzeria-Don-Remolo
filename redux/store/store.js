import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/auth';
import { modalReducer } from '../slices/modal/modalSlice';
import { resetPasswordReducer } from '../slices/reset-password/resetPasswordSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		resetPassword: resetPasswordReducer,
	},
});

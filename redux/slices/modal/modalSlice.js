import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		login: false,
		register: false,
		menu: false,
		cart: false,
		bannerBenefit: false,
		productDetails: false,
	},
	reducers: {
		handleModal: (state, action) => {
			if(action.payload === 'login') {
				if(state.register) state.register = false;
				state.login = !state.login;
			} else if(action.payload === 'register') {
				if(state.login) state.login = false;
				if(state.bannerBenefit) state.bannerBenefit = false;
				state.register = !state.register;
			} else if(action.payload === 'menu') {
				state.menu = !state.menu;
			} else if(action.payload === 'login-success') {
				state.login = !state.login;
			} else if(action.payload === 'register-success') {
				state.register = !state.register;
			} else if(action.payload === 'cart') {
				if(state.productDetails) state.productDetails = false;
				state.cart = !state.cart;
			} else if(action.payload === 'bannerBenefit') {
				state.bannerBenefit = !state.bannerBenefit
			} else if(action.payload === 'productDetails') {
				state.productDetails = !state.productDetails
			}
		},
	}
});

export const { handleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
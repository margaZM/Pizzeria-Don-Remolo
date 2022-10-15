import { createSlice } from '@reduxjs/toolkit';

const initialState = {
		login: false,
		register: false,
		menu: false,
		cart: false,
		bannerBenefit: false,
		productDetails: false,
		promotionDetails: false,
};
const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action) => {
			return state = {
				...initialState,
				[action.payload]: true,
			};
		},
		closeModal: (state, action) => {
			state[action.payload] = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
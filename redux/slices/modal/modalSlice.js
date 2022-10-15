import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modal',
	initialState: {
		login: false,
		register: false,
		menu: false,
		cart: false,
		bannerBenefit: false,
		productDetails: false,
		promotionDetails: false,
	},
	reducers: {
		openModal: (state, action) => {
			state[action.payload] = true;
		},
		closeModal: (state, action) => {
			state[action.payload] = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

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
	},
	reducers: {
		openModal: (state, action) => {
			state[action.payload] = true;
			console.log(state);
			console.log(action.payload);
		},
		closeModal: (state, action) => {
			state[action.payload] = false;
		},
	},
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

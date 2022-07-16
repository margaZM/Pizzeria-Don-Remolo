import { createSlice } from "@reduxjs/toolkit";

const resetPasswordSlice = createSlice({
	name: 'reset-password-slice',
	initialState: {
		currentEmail: '',
		currentCode: '',
		mailStep: false,
		codeStep: false,
	},
	reducers: {
		handleStep: (state, action) => {
			if(action.payload.isEmail) {
				state.currentEmail = action.payload.email;
			};
			if(action.payload.isCode) {
				state.currentCode = action.payload.code;
			};
			if(action.payload === 'mailStep') {
				state.mailStep = !state.mailStep;
			} 
			if(action.payload === 'codeStep') {
				state.codeStep = !state.codeStep;
			}
			if(action.payload === 'resetSuccessful') {
				state.mailStep = false;
				state.codeStep = false;
				state.currentEmail = '';
				state.currentCode = '';
			} 
		},
	},
});

export const { handleStep } = resetPasswordSlice.actions;
export const resetPasswordReducer = resetPasswordSlice.reducer;
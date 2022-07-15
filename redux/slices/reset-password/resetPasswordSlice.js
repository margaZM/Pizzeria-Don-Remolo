import { createSlice } from "@reduxjs/toolkit";

const resetPasswordSlice = createSlice({
	name: 'reset-password-slice',
	initialState: {
		currentEmail: '',
		currentCode: '',
		mailStep: false,
		codeStep: false,
		passwordStep: false,
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
				console.log(state.mailStep)
				console.log(state.codeStep)
				console.log(state.passwordStep)
			}
		},
	},
});

export const { handleStep } = resetPasswordSlice.actions;
export const resetPasswordReducer = resetPasswordSlice.reducer;
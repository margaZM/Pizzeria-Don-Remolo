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
			if(action.payload === 'mailStep') {
				state.mailStep = !state.mailStep;
			}
		},
	},
});

export const { handleStep } = resetPasswordSlice.actions;
export const resetPasswordReducer = resetPasswordSlice.reducer;
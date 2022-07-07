import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loging } from '../../../services/authService';

export const detectUser = createAsyncThunk('user, detect-user', () => {
	const user = {
		name: localStorage.getItem('userName'),
		token: localStorage.getItem('auth')
	};
	return user;
});

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		auth: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
			loging();
		},
	},
	extraReducers(builder) {
		builder
			.addCase(detectUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
	},
});

export const { auth, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

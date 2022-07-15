import { create } from './baseService';

const http = create({
	useAccessToken: false,
});

export const loginUser = (body) => {
	return http.post('/account/Login', body);
};

export const registerUser = (body) => {
	return http.post('/account/Register', body);
};

export const requestResetPassword = (body) => {
	return http.post('/Account/RequestResetPassword', body);
};
export const IsResetPasswordCodeValid = (body) => {
	return http.post('/Account/IsResetPasswordCodeValid', body);
};
export const resetPassword = (body) => {
	return http.post('/Account/ResetPassword', body);
};

export const checkingEmail = (body) => {
	return http.post('/Account/EmailExists', body);
};


export const loging = () => {
	window.localStorage.removeItem('auth');
	window.localStorage.removeItem('userName');
};
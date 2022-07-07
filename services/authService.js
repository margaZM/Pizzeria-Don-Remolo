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

export const loging = () => {
	window.localStorage.removeItem('auth');
	window.localStorage.removeItem('userName');
};
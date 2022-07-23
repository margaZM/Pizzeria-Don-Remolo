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

export const registerWithGoogle = (body) => {
	return http.post('/Account/RegisterWithGoogle', body);
};

export const loginWithGoogle = (body) => {
	return http.post('/Account/LoginWithGoogle', body);
};
export const registerWithFacebook = (body) => {
	return http.post('/Account/RegisterWithFacebook', body);
};

export const loginWithFacebook = (body) => {
	return http.post('/Account/LoginWithFacebook', body);
};

export const loging = () => {
	window.localStorage.removeItem('auth');
	window.localStorage.removeItem('userName');
};

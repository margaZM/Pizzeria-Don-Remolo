import { create } from './baseService';

const http = create({
	useAccessToken: false,
});
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
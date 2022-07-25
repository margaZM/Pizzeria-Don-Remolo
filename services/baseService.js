import axios from 'axios';
import { logout } from './authService';

export const URL = process.env.WEB_API || 'http://localhost:44390';
let accessToken;
if (typeof window !== 'undefined') {
	accessToken = window.localStorage.getItem('token') || null;
}

export const create = (opts = {}) => {
	const http = axios.create({
		baseURL: URL + '/api',
		...opts,
	});

	http.interceptors.request.use((request) => {
		if (opts.useAccessToken !== false) {
			request.headers.common.Authorization = `Bearer ${accessToken}`;
		} else {
			delete request.headers.common.Authorization;
		}
		return request;
	});
	return http;
};
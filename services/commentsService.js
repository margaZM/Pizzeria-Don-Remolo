import { create } from './baseService';

const http = create({
	useAccessToken: false,
});

export const createComment = (body) => {
	return http.post('/comments', body);
};

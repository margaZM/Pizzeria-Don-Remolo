import { create } from './baseService';

const http = create({
	useAccessToken: false,
});

export const getCategories = () => {
	return http.get('/Categories');
};

export const getCategoriesById = (productId) => {
	return http.post(`/Categories/${productId}`);
};

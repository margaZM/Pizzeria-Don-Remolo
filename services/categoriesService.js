import { create } from './baseService';

const http = create({
	useAccessToken: false,
});

export const getCategories = () => {
	return http.get('/Categories');
};

export const getCategoriesById = (productId) => {
	return http.get(`/Categories/${productId}`);
};

export const getCategoriesHome = () => {
	return http.get(`/Categories/HomeCategories`);
};

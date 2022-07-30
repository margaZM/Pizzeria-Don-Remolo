import REQUESTS from './productsRequests';

export const productServices = {
	getAllProducts: REQUESTS.getAllProducts,
	getProductsByCategory: REQUESTS.getProductsByCategory,
	getPromotions: REQUESTS.getPromotions,
	searchProduct: REQUESTS.searchProduct,
	searchPromotionById: REQUESTS.searchPromotionById
};
import axios from 'axios';
import { URL } from '../baseService';

const USER_BASKET = `${URL}/api/Basket/GetUserBasket`;
const BASKET = `${URL}/api/Basket`;
const CREATE_EDIT_BASKET = `${URL}/api/Basket`;
const CREATE_ORDER = `${URL}/api/Basket/OrderBasket`;

const getUserBasket = async (userData = {}) => {
};
const getBasket = async (id) => {
	const request = await axios.get(`${BASKET}/${id}`);
	return request;
};
const createEditBasket = async (guestData = {}) => {
	const request = await axios.put(CREATE_EDIT_BASKET, guestData);
	return request;
};
const createOrder = (id) => {};

export const basketServices = {
	getBasket,
	createEditBasket,
};
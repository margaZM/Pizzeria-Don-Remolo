import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setActionType } from '../redux/slices/cart/cartSlice';
import {
	handleSelectedProduct,
	handleSelectedProductCounter,
} from '../redux/slices/selectedProduct/selectedProductSlice';
import { productServices } from '../services/product-services/productServices';
import { useOnModalChange } from './useOnModalChange';

export const useSelectProduct = () => {
	const { openModalDispatch } = useOnModalChange();
	const dispatch = useDispatch();
	const currentState = useSelector((state) => state.selectedProduct);

	const handlePromotion = async (e) => {
		dispatch(setActionType({ type: 'add' }));
		const res = await productServices.searchPromotionById(e);
		if (res.status === 200) {
			dispatch(
				handleSelectedProduct({
					selected: true,
					data: { ...res[0], quantity: 1, productRelationNumber: uuidv4() },
				}),
			);
			openModalDispatch(e);
		}
	};
	const handleProductSelection = async (e) => {
		const productID = e.target.dataset.id;
		dispatch(setActionType({ type: 'add' }));
		const res = await productServices.getProductByID(productID);
		if (res.status === 200) {
			dispatch(
				handleSelectedProduct({
					selected: true,
					data: { ...res.data, quantity: 1, productRelationNumber: uuidv4() },
				}),
			);
			openModalDispatch(e);
		}
	};
	const handleQuantity = (e) =>
		dispatch(handleSelectedProductCounter(e.target.dataset.action));
	return {
		handlePromotion,
		handleProductSelection,
		handleQuantity,
		currentState,
	};
};

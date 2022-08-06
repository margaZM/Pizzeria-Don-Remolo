import { useDispatch, useSelector } from 'react-redux';
import { setActionType } from '../redux/slices/cart/cartSlice';
import { handleSelectedProduct, handleSelectedProductCounter } from '../redux/slices/selectedProduct/selectedProductSlice';
import { productServices } from '../services/product-services/productServices';
import { useOnModalChange } from './useOnModalChange';

export const useSelectProduct = () => {
	const { handleWindow } = useOnModalChange();
	const dispatch = useDispatch();
	const currentState = useSelector(state => state.selectedProduct);
	const handlePromotion = (e) => {
		dispatch(setActionType({ type: "add" }));
		handleWindow(e);
		productServices.searchPromotionById(e).then(res => {
			dispatch(handleSelectedProduct({ selected: true, data: { ...res[0], quantity: 1 }}))
		});
	};
	const handleQuantity = (e) => dispatch(handleSelectedProductCounter(e.target.dataset.action));
	return {
		handlePromotion,
		handleQuantity,
		currentState
	};
};
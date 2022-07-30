import { useDispatch, useSelector } from 'react-redux';
import { handleSelectedProduct } from '../redux/slices/selectedProduct/selectedProductSlice';
import { productServices } from '../services/product-services/productServices';
import { useOnModalChange } from './useOnModalChange';

export const useSelectProduct = () => {
	const { handleWindow } = useOnModalChange();
	const dispatch = useDispatch();
	const currentState = useSelector(state => state.selectedProduct);
	const handlePromotion = (e) => {
		handleWindow(e);
		productServices.searchPromotionById(e).then(res => dispatch(handleSelectedProduct({ selected: true, data: res[0] })));
	};
	return {
		handlePromotion,
		currentState
	};
};
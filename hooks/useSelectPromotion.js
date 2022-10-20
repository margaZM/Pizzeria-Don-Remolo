import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setActionType } from '../redux/slices/cart/cartSlice';
import {
	handleSelectedProduct,
	handleSelectedProductCounter,
	setDetailPromo,
} from '../redux/slices/selectedProduct/selectedProductSlice';
import { productServices } from '../services/product-services/productServices';
import { useOnModalChange } from './useOnModalChange';

export const useSelectPromotion = () => {
	const { openModalDispatch } = useOnModalChange();
	const dispatch = useDispatch();
	const currentState = useSelector((state) => state.selectedProduct);
	const handlePromotion = (promotion, dataModal) => {
		dispatch(setActionType({ type: 'add' }));
		openModalDispatch(dataModal);
		productServices.getPromotionDetails(promotion.id).then((res) => {
			dispatch(
				handleSelectedProduct({
					selected: true,
					data: {
						...promotion,
						...res.data,
						quantity: 1,
						productRelationNumber: uuidv4(),
					},
				}),
			);
		});
	};
	const handleQuantity = (action) => dispatch(handleSelectedProductCounter(action));

	const handleSelectedPromotionOptions = (optionSelected) => {
		const newProductOfPromotion = { ...optionSelected, quantity: 1 };

		const selectedProductsOfPromotion = currentState.selectedProduct.detailPromo || [];

		const isProductAlreadySelected = selectedProductsOfPromotion.some(
			(product) => product.productId === newProductOfPromotion.productId,
		);
		if (isProductAlreadySelected) {
			const updateOptionsPromotion = selectedProductsOfPromotion.map((item) =>
				item.productId === newProductOfPromotion.productId
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
			dispatch(setDetailPromo([...updateOptionsPromotion]));
		} else {
			dispatch(setDetailPromo([...selectedProductsOfPromotion, newProductOfPromotion]));
		}
	};

	const handleDeleteSelectedPromotionOptions = (optionDeleted) => {
		const selectedProductsOfPromotion = currentState.selectedProduct.detailPromo || [];
		const productSelected = selectedProductsOfPromotion.find(
			(product) => product.productId === optionDeleted.productId,
		);

		const updateOptionsPromotion = selectedProductsOfPromotion.map((item) =>
			item.productId === optionDeleted.productId
				? { ...item, quantity: item.quantity - 1 }
				: item,
		);

		const deleteOptionsPromotion = selectedProductsOfPromotion.filter(
			(item) => item.productId !== optionDeleted.productId,
		);
		dispatch(
			setDetailPromo(
				productSelected.quantity === 1
					? [...deleteOptionsPromotion]
					: [...updateOptionsPromotion],
			),
		);
	};

	return {
		handlePromotion,
		handleQuantity,
		currentState,
		handleSelectedPromotionOptions,
		handleDeleteSelectedPromotionOptions,
	};
};

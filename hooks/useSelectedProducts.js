import { useDispatch, useSelector } from 'react-redux';
import {
	setSelectedProduct,
	setDetailPromo,
	setSelectedProductCounter,
} from '/redux/slices/selectedProduct/selectedProductsSlice.js';
import { productServices } from '../services/product-services/productServices';
import { useOnModalChange } from './useOnModalChange';
import { setPromotions } from '/redux/slices/products/productsSlice.js';

export const useSelectedProducts = () => {
	const { openModalDispatch } = useOnModalChange();
	const dispatch = useDispatch();
	const currentState = useSelector((state) => state.selectedProducts);
	const promotions = useSelector((state) => state.products.promotions);

	const handlePromotion = async (promotion, dataModal) => {
		openModalDispatch(dataModal);
		const response = await getDetailPromotions(promotion.id);

		const addRuleItemsInSelectedPromotion = promotions.map((item) =>
			item.id === promotion.id ? { ...item, ruleItems: response.ruleItems } : item,
		);
		dispatch(setPromotions([...addRuleItemsInSelectedPromotion]));

		dispatch(
			setSelectedProduct({
				selected: true,
				...promotion,
				title: promotion.title || promotion.name,
				price: promotion.promotionalPrice,
				...response,
				quantity: 1,
				isPromotion: true,
				context: dataModal,
			}),
		);
	};

	const handleQuantity = (action) => dispatch(setSelectedProductCounter(action));

	const handleSelectedPromotionOptions = (optionSelected) => {
		const newProductOfPromotion = { ...optionSelected, quantity: 1 };

		const selectedProductsOfPromotion = currentState.selectedProduct?.detailPromo || [];

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
		const selectedProductsOfPromotion = currentState.selectedProduct?.detailPromo || [];
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

	const getDetailPromotions = async (id) => {
		try {
			const response = await productServices.getPromotionDetails(id);
			return response.status === 200 && response.data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleProductSelection = async (product, dataModal) => {
		dispatch(
			setSelectedProduct({
				selected: true,
				context: dataModal,
				...product,
				quantity: 1,
				context: dataModal,
			}),
		);
		openModalDispatch(dataModal);
	};

	return {
		handlePromotion,
		handleQuantity,
		handleProductSelection,
		handleSelectedPromotionOptions,
		handleDeleteSelectedPromotionOptions,
		currentState,
		getDetailPromotions,
	};
};

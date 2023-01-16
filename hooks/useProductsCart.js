import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../redux/slices/cart/cartSlices';
import { useNotification } from './useNotification';
import { useOnModalChange } from './useOnModalChange';
import { useSelectProduct } from './useSelectProduct';

export const useProductsCart = () => {
	const dispatch = useDispatch();
	const { currentState } = useSelectProduct();
	const { openModalDispatch } = useOnModalChange();

	const {
		infoNotification,
		setInfoNotification,
		isOpenNotification,
		setIsOpenNotification,
	} = useNotification();

	const cartState = useSelector((state) => state.productsCart.cart);

	const setAddProduct = (product) => {
		const newProduct = {
			totalPrice: 0,
			id: product.id,
			img: product.picture,
			title: product.name || product.title,
			description: product.description,
			quantity: 1,
			productPrice: product.price || product.productPrice,
			newPrice: product.newPrice,
			oldPrice: product.oldPrice,
			promotionalPrice: product.promotionalPrice,
			productSubTotal: 0,
			detailPopulars: product.detailPopulars || [],
			detailPromo: product.detailPromo || [],
			context: product.context,
			ruleItems: product.ruleItems,
		};
		const isProductAlreadySelected = cartState.some(
			(product) => product.id === newProduct.id,
		);
		if (isProductAlreadySelected) {
			const { action } = product;
			const updateSelectedProduct = cartState.map((item) =>
				item.id === newProduct.id
					? {
							...item,
							quantity: action !== 'edit' && item.quantity + 1,
							...newProduct,
					  }
					: item,
			);

			dispatch(setCart([...updateSelectedProduct]));
		} else {
			dispatch(setCart([...cartState, newProduct]));
		}
		openModalDispatch('cart');
		setIsOpenNotification(true);
		setInfoNotification({
			icon: 'success',
			message: `"${currentState?.selectedProduct?.title}" ha sido agregado al carrito`,
		});
		openModalDispatch('cart');
	};

	return {
		setAddProduct,
		cartState,
		infoNotification,
		isOpenNotification,
	};
};

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
	handleAddToCart,
	handleDeleteCartItem,
	handleEditCartItem,
	handleSelectedEditItemQuantity,
	handleCartItemQuantity,
	setActionType,
} from '../redux/slices/cart/cartSlice';
import { productServices } from '../services/product-services/productServices';
import { useNotification } from './useNotification';
import { useOnModalChange } from './useOnModalChange';
import { useSelectProduct } from './useSelectProduct';

export const useCartValues = (context) => {
	const dispatch = useDispatch();
	const { currentState } = useSelectProduct();
	const { openModalDispatch } = useOnModalChange();
	const cartState = useSelector((state) => state.cart.cart);
	const actionType = cartState.actionType;
	const [drinksAsProducts, setDrinksAsProducts] = useState([]);
	const [basketValues, setBasketValues] = useState([]);

	const {
		infoNotification,
		setInfoNotification,
		isOpenNotification,
		setIsOpenNotification,
	} = useNotification();
	const [values, setValues] = useState({
		id: currentState?.selectedProduct?.id || 0,
		title: '',
		size: cartState?.selectedEditItem?.size || { type: 'Mediana', id: 2 },
		dough: cartState?.selectedEditItem?.dough || { type: 'Masa Normal', id: 1 },
		ingredients: cartState?.selectedEditItem?.ingredients || [],
		rawIngredients: cartState?.selectedEditItem?.rawIngredients || [],
		drinks: cartState?.selectedEditItem?.drinks || [],
		rawDrinks: cartState?.selectedEditItem?.rawDrinks || [],
		img: '',
		productPrice: cartState?.selectedEditItem?.productPrice || 12,
		additionalPrice: cartState?.selectedEditItem?.additionalPrice || 0,
		quantity: 1,
		productSubTotal: cartState?.cart?.selectedEditItem?.productSubTotal || 0,
		context: context,
		detailPromo: currentState.selectedProduct?.detailPromo || [],
	});
	console.log(currentState?.selectedProduct);
	let cartTimeout;
	const handleChange = (e) => {
		const type = e.target.dataset.type;
		const price = +e.target.dataset.price ? +e.target.dataset.price : null;
		const id = +e.target.dataset.id || undefined;
		const filteredAdditional = [];
		const filteredRawAdditional = [];
		if (type === 'sizes') {
			setValues({
				...values,
				size: { type: e.target.value, id },
				productPrice: price,
			});
		} else if (type === 'dough') {
			setValues({
				...values,
				dough: { type: e.target.value, id },
			});
		} else if (type === 'ingredients') {
			if (
				values.ingredients.find(
					(ingredient) => ingredient.ingredientName === e.target.value,
				)
			) {
				filteredAdditional = values.ingredients.filter(
					(ingredient) => ingredient.ingredientName !== e.target.value,
				);
				filteredRawAdditional = values.rawIngredients.filter(
					(rawIngredient) => rawIngredient !== e.target.value,
				);
				return setValues({
					...values,
					additionalPrice: +values.additionalPrice - +price,
					rawIngredients: [...filteredRawAdditional],
					ingredients: [...filteredAdditional],
				});
			}
			setValues((prevState) => {
				return {
					...values,
					additionalPrice: +prevState.additionalPrice + +price,
					rawIngredients: [...values.rawIngredients, e.target.value],
					ingredients: [
						...values.ingredients,
						{ ingredientName: e.target.value, ingredientPrice: price, ingredientId: id },
					],
				};
			});
		} else if (type === 'drinks') {
			if (values.drinks.find((drink) => drink.productName === e.target.value)) {
				let filteredDrinksAsProducts;
				filteredAdditional = values.drinks.filter(
					(drink) => drink.productName !== e.target.value,
				);
				filteredDrinksAsProducts = filteredAdditional
					.filter((item) => item.isDrink)
					.map((drink) => {
						return {
							...filteredDrinksAsProducts,
							productId: drink.id,
							isDrink: drink.isDrink,
							productRelationNumber: drink.productRelationNumber,
						};
					});
				filteredRawAdditional = values.rawDrinks.filter(
					(rawDrink) => rawDrink !== e.target.value,
				);
				setDrinksAsProducts([...filteredDrinksAsProducts]);
				return setValues({
					...values,
					additionalPrice: +values.additionalPrice - +price,
					rawDrinks: [...filteredRawAdditional],
					drinks: [...filteredAdditional],
				});
			}
			productServices
				.getProductsByCategory({
					pageSize: 30,
					category: 'bebidas',
				})
				.then((res) => {
					const selectedDrink = res.data.data.find((drink) => drink.id === +id);
					setDrinksAsProducts([
						...drinksAsProducts,
						{
							productId: selectedDrink.id,
							isDrink: true,
							productRelationNumber:
								currentState?.selectedProduct?.id || cartState?.selectedEditItem?.id,
						},
					]);
				});
			setValues((prevState) => {
				return {
					...values,
					additionalPrice: +prevState.additionalPrice + +price,
					rawDrinks: [...values.rawDrinks, e.target.value],
					drinks: [
						...values.drinks,
						{
							productName: e.target.value,
							isDrink: true,
							price,
							id,
							productRelationNumber:
								currentState?.selectedProduct?.id || cartState?.selectedEditItem?.id,
						},
					],
				};
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (actionType === 'edit') {
			console.log('editando');
			dispatch(
				handleEditCartItem({
					totalPrice:
						+cartState.totalPrice + +values.productPrice + +values.additionalPrice,
					data: {
						...values,
						id: cartState?.selectedEditItem?.id,
						title: cartState?.selectedEditItem?.title,
						img: cartState?.selectedEditItem?.img,
						quantity: cartState?.selectedEditItem?.quantity,
						productSubTotal: +values.productPrice + +values.additionalPrice,
						detailPromo: currentState.selectedProduct?.detailPromo || [],
					},
					context: values.context,
					apiData: {
						id: localStorage.getItem('GuestCart') || uuidv4(),
						products: [
							...drinksAsProducts,
							{
								productId: cartState?.selectedEditItem?.id,
								doughId: values.dough.id,
								sizeId: values.size.id,
								quantity: cartState?.selectedEditItem?.quantity,
								ingredients: values.ingredients,
							},
						],
					},
				}),
			);
			openModalDispatch('cart');
		} else if (actionType === 'add') {
			dispatch(
				handleAddToCart({
					totalPrice:
						+cartState.totalPrice + +values.productPrice + +values.additionalPrice,
					data: {
						...values,
						id: currentState?.selectedProduct?.id,
						img: currentState?.selectedProduct?.picture,
						title: currentState?.selectedProduct?.title,
						quantity: currentState?.selectedProduct?.quantity,
						productSubTotal: +values.productPrice + +values.additionalPrice,
						detailPromo: currentState.selectedProduct?.detailPromo || [],
					},
					context: values.context,
					apiData: {
						id: localStorage.getItem('GuestCart') || uuidv4(),
						products: [
							...drinksAsProducts,
							{
								productId: currentState?.selectedProduct?.id,
								doughId: values.dough.id,
								sizeId: values.size.id,
								quantity: currentState?.selectedProduct?.quantity,
								ingredients: [...values.ingredients],
							},
						],
					},
				}),
			);
			setIsOpenNotification(true);
			setInfoNotification({
				icon: 'success',
				message: `"${currentState?.selectedProduct?.title}" ha sido agregado al carrito`,
			});
			cartTimeout = setTimeout(() => {
				openModalDispatch('cart');
			}, 2000);
		}
	};
	return {
		dispatch,
		handleChange,
		handleSubmit,
		handleAddToCart,
		handleDeleteCartItem,
		handleEditCartItem,
		handleSelectedEditItemQuantity,
		handleCartItemQuantity,
		setActionType,
		cartState,
		actionType,
		currentState,
		values,
		setValues,
		basketValues,
		setBasketValues,
		drinksAsProducts,
		setDrinksAsProducts,
		infoNotification,
		setInfoNotification,
		isOpenNotification,
		setIsOpenNotification,
	};
};

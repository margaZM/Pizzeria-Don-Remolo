import { useEffect, useState } from 'react';
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
		size: cartState?.cart?.selectedEditItem?.size || { type: 'Mediana', id: 0 },
		dough: cartState?.cart?.selectedEditItem?.dough || { type: 'Masa normal', id: 0 },
		ingredients: cartState?.cart?.selectedEditItem?.ingredients || [],
		rawIngredients: cartState?.cart?.selectedEditItem?.rawIngredients || [],
		drinks: cartState?.cart?.selectedEditItem?.drinks || [],
		rawDrinks: cartState?.cart?.selectedEditItem?.rawDrinks || [],
		img: '',
		productPrice: cartState?.cart?.selectedEditItem?.productPrice || 0,
		additionalPrice: cartState?.cart?.selectedEditItem?.additionalPrice || 0,
		quantity: 1,
		productSubTotal: cartState?.cart?.selectedEditItem?.productSubTotal || 0,
	});
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
				filteredAdditional = values.drinks.filter(
					(drink) => drink.productName !== e.target.value,
				);
				filteredRawAdditional = values.rawDrinks.filter(
					(rawDrink) => rawDrink !== e.target.value,
				);
				setDrinksAsProducts([...filteredAdditional]);
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
								currentState?.selectedProduct?.id || cartStatet?.selectedEditItem?.id,
						},
					]);
				});
			setValues((prevState) => {
				return {
					...values,
					additionalPrice: +prevState.additionalPrice + +price,
					rawDrinks: [...values.rawDrinks, e.target.value],
					drinks: [...values.drinks, { productName: e.target.value, price }],
				};
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (actionType === 'edit') {
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
					},
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
					},
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
	useEffect(() => {
		console.log('use cart values');
		if (context === 'productDetails') {
			return () => clearTimeout(cartTimeout);
		}
	}, []);
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

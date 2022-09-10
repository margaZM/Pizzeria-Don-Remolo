import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCartValues } from '../../../hooks/useCartValues';
import { basketServices } from '../../../services/product-services/basketServices';
import CartProduct from '../../shared/CartProduct/Main';

export const Middle = () => {
	const [loaded, setLoaded] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const cartDataHandler = useCartValues();
	const currentProducts = useSelector(state => state.cart);
	const apiData = cartDataHandler.cartState.apiData;
	useEffect(() => {
		let drinks = [];
		let products = [];
		let cartItems = [];
		let totalPrice = 0;
		currentProducts?.cart?.data?.length >= 1 ? setLoaded(true) : null;
		if(localStorage.getItem("GuestCart") && currentProducts?.cart?.data?.length < 1) {
			basketServices.getBasket(localStorage.getItem("GuestCart")).then(res => {
				drinks = res.data.products.filter(item => item.isDrink);
				products = res.data.products.filter(item => !item.isDrink);
				products.forEach((item) => {
					let additionalPrice = [...item.ingredients.map(rawIngredient => rawIngredient.ingredientPrice), ...drinks.filter(drink => item.productId === drink.productRelationNumber).map(rawDrink => rawDrink.price),].reduce((a, b) => a + b, 0);
					let productPrice = item.price - [...item.ingredients.map(rawIngredient => rawIngredient.ingredientPrice)].reduce((a, b) => a + b, 0);
					cartItems = [
						...cartItems,
						{
							id: item.productId,
							title: item.productName,
							productPrice,
							quantity: item.quantity,
							img: item.productImage,
							ingredients: item.ingredients,
							drinks: drinks.filter(drink => item.productId === drink.productRelationNumber),
							productSubTotal: productPrice + additionalPrice,
							size: {type: item.sizeName, id: item.sizeId},
							dough: {type: item.doughName, id: item.doughId},
							additionalPrice,
							rawDrinks: drinks.filter(drink => item.productId === drink.productRelationNumber).map(rawDrink => rawDrink.productName),
							rawIngredients: [...item.ingredients.map(rawIngredient => rawIngredient.ingredientName)],
						}
					]
				});
				cartItems.forEach(item => totalPrice += item.productSubTotal * item.quantity);
				cartDataHandler.dispatch(cartDataHandler.handleAddToCart({
					totalPrice,
					data: cartItems,
					apiData: {
						id: localStorage.getItem("GuestCart"),
						products: res.data.products.map(product => {
							return {
								productId: product.productId,
								productRelationNumber: product.productRelationNumber,
								doughId: product.doughId,
								sizeId: product.sizeId,
								quantity: product.quantity,
								ingredients: [...product.ingredients],
							}
						})
					}
				}));
				cartItems.length >= 1 ? setLoaded(true) : null;
			})
			.catch(() => {
				setErrorMessage("Lo sentimos, ha habido un error al cargar los datos. Refresque la página.");
				setLoaded(true);
				return;
			});
		} else if(!localStorage.getItem("GuestCart") && currentProducts?.cart?.data?.length < 1) {
			setLoaded(true);
			setErrorMessage("No hay productos en el carrito.");
		};
		if(apiData.id !== undefined) {
			// console.log(apiData)
			basketServices.createEditBasket(apiData)
			.then(res => {
				if(res.status >= 200 && res.status < 400) {
						localStorage.setItem("GuestCart", apiData.id);
					};
				})
			.catch(error => console.log(error))
		};
	}, []);
	return (
		<>
			<div className='h-full border-t border-b border-gray overflow-y-auto'>
				{loaded || <p className="text-center">Estamos cargando los datos, aguarde un momento...</p>}
				{loaded && <p className="text-center">{errorMessage}</p>}
				{loaded && currentProducts?.cart?.data?.map(product => (
					<CartProduct
						key={product.id}
						id={product.id}
						title={product.title}
						productPrice = {product.productPrice}
						img={product.img}
						size={product?.size?.type}
						dough={product?.dough?.type}
						additional={[ ...product.drinks, ...product.ingredients ]}
						quantity={product.quantity} 
					/>
				))}
			</div>
		</>
	);
};
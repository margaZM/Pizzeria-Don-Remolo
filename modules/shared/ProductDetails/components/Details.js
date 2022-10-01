import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNotification } from "../../../../hooks/useNotification";
import { useOnModalChange } from "../../../../hooks/useOnModalChange";
import { useSelectProduct } from "../../../../hooks/useSelectProduct";
import { handleAddToCart, handleEditCartItem } from "../../../../redux/slices/cart/cartSlice";
import { productServices } from "../../../../services/product-services/productServices";
import { Notification } from "../../Notification";
import { CartPlus } from "./CartPlus";
import DetailsHeader from "./DetailsHeader";
import { PickDough } from "./PickDough";
import { PickDrink } from "./PickDrink";
import { PickIngredients } from "./PickIngredients";
import { PickSize } from "./PickSize";

export const Details = () => {
	const { currentState } = useSelectProduct();
	const { handleWindow } = useOnModalChange();
	const {
		infoNotification,
		setInfoNotification,
		isOpenNotification,
		setIsOpenNotification,
	} = useNotification();
	const cartState = useSelector((state) => state.cart);
	const actionType = cartState.cart.actionType;
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		id: currentState?.selectedProduct?.id || 0,
		title: "",
		size: cartState?.cart?.selectedEditItem?.size || {type: "Mediana", id: 0},
		dough: cartState?.cart?.selectedEditItem?.dough || {type: "Masa normal", id: 0},
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
	const [drinksAsProducts, setDrinksAsProducts] = useState([]);
	let cartTimeout;
	const handleChange = (e) => {
		const type = e.target.dataset.type;
		const price = +e.target.dataset.price ? +e.target.dataset.price : null;
		const id = +e.target.dataset.id || undefined;
		const filteredAdditional = [];
		const filteredRawAdditional = [];
		if(type === "sizes") {
			setValues({ 
				...values, 
				size: {type: e.target.value, id}, 
				productPrice: price,
			});
		} else if(type === "dough") {
			setValues({ 
				...values, dough: {type: e.target.value, id} 
			});
		} else if(type === "ingredients") {
			if(values.ingredients.find(ingredient => ingredient.ingredientName === e.target.value)) {
				filteredAdditional = values.ingredients.filter(ingredient => ingredient.ingredientName !== e.target.value);
				filteredRawAdditional = values.rawIngredients.filter(rawIngredient => rawIngredient !== e.target.value);
				return setValues({ 
					...values, 
					additionalPrice: +values.additionalPrice - +price, 
					rawIngredients: [ ...filteredRawAdditional ],
					ingredients: [ ...filteredAdditional ]
				});
			}
			setValues((prevState) => {
				return {
					...values,
					additionalPrice: +prevState.additionalPrice + +price,
					rawIngredients: [ ...values.rawIngredients, e.target.value ],
					ingredients: [ ...values.ingredients, {ingredientName: e.target.value, ingredientPrice: price, ingredientId: id }] 
				};
			});
		} else if(type === "drinks") {
			if(values.drinks.find(drink => drink.productName === e.target.value)) {
				filteredAdditional = values.drinks.filter(drink => drink.productName !== e.target.value);
				filteredRawAdditional = values.rawDrinks.filter(rawDrink => rawDrink !== e.target.value);
				setDrinksAsProducts([...filteredAdditional]);
				return setValues({ 
					...values, 
					additionalPrice: +values.additionalPrice - +price,
					rawDrinks: [ ...filteredRawAdditional ],
					drinks: [ ...filteredAdditional ] 
				});
			};
			productServices.getProductsByCategory({
				pageSize: 30,
				category: "bebidas"
			}).then(res => {
				const selectedDrink = res.data.data.find(drink => drink.id === +id);
				setDrinksAsProducts([...drinksAsProducts, {productId: selectedDrink.id, isDrink: true, productRelationNumber: currentState?.selectedProduct?.id || cartState?.cart?.selectedEditItem?.id}]);
			})
			setValues(prevState => {
				return { 
					...values,
					additionalPrice: +prevState.additionalPrice + +price, 
					rawDrinks: [ ...values.rawDrinks, e.target.value ],
					drinks: [ ...values.drinks, {productName: e.target.value, price }] 
				};
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if(actionType === "edit") {
			dispatch(handleEditCartItem({
				totalPrice: +cartState.cart.totalPrice + +values.productPrice + +values.additionalPrice,
				data: { 
					...values,
					id: cartState?.cart?.selectedEditItem?.id,
					title: cartState?.cart?.selectedEditItem?.title,
					img: cartState?.cart?.selectedEditItem?.img,
					quantity: cartState?.cart?.selectedEditItem?.quantity,
					productSubTotal: +values.productPrice + +values.additionalPrice,
				},
				apiData: {
					id: localStorage.getItem("GuestCart") || uuidv4(),
					products: [...drinksAsProducts, {
						productId: cartState?.cart?.selectedEditItem?.id,
						doughId: values.dough.id,
						sizeId: values.size.id,
						quantity: cartState?.cart?.selectedEditItem?.quantity,
						ingredients: values.ingredients,
					}],
				}
			}));
			handleWindow("cart");
		} else if(actionType === "add") {
			dispatch(handleAddToCart({
				totalPrice: +cartState.cart.totalPrice + +values.productPrice + +values.additionalPrice,
				data: { 
					...values, 
					id: currentState?.selectedProduct?.id,
					img: currentState?.selectedProduct?.picture,
					title: currentState?.selectedProduct?.title,
					quantity: currentState?.selectedProduct?.quantity,
					productSubTotal: +values.productPrice + +values.additionalPrice,
				},
				apiData: {
					id: localStorage.getItem("GuestCart") || uuidv4(),
					products: [...drinksAsProducts, {
						productId: currentState?.selectedProduct?.id,
						doughId: values.dough.id,
						sizeId: values.size.id,
						quantity: currentState?.selectedProduct?.quantity,
						ingredients: [...values.ingredients],
					}],
				}
			}));
			setIsOpenNotification(true);
			setInfoNotification({
				icon: 'success',
				message: `"${currentState?.selectedProduct?.title}" ha sido agregado al carrito`,
			});
			cartTimeout = setTimeout(() => {
				handleWindow("cart");
			}, 2000);;
		};
	};
	useEffect(() => {
		return() => clearTimeout(cartTimeout);
	}, []);
	return (
		<form
			className="relative w-full h-max p-3 pb-[4rem] sm:w-[60%]"
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			{isOpenNotification && (
				<Notification
					message={infoNotification.message}
					icon={infoNotification.icon}
					setIsOpenNotification={setIsOpenNotification}
					successDelay={2000}
				/>
			)}
			<DetailsHeader title="Tamaños" icon="pizza" iconTitle="Icono pizza" required={true}>
				<PickSize />
			</DetailsHeader>
			<DetailsHeader
				title="Elige la masa"
				icon="dough"
				iconTitle="Icono masa"
				required={true}
			>
				<PickDough />
			</DetailsHeader>
			<DetailsHeader
				title="Añade ingredientes"
				icon="ingredients"
				iconTitle="Icono ingredientes"
			>
				<PickIngredients />
			</DetailsHeader>
			<DetailsHeader title="Añade bebidas" icon="drink" iconTitle="Icono bebidas">
				<PickDrink />
			</DetailsHeader>
			<div className="fixed bottom-0 sm:bottom-[30px] flex justify-center -mx-3 w-full bg-white sm:max-w-[370px] p-2">
				<div className="w-full max-w-[270px]">
					<button
						className="flex justify-between items-center gap-2 p-4 w-full h-[40px] text-white bg-primary rounded-[50px]"
						type="submit"
					>
						<CartPlus />
						<span>Agregar al carrito</span>
						<span>|</span>
						<span>
							$
							{currentState?.selectedProduct?.quantity
								? currentState?.selectedProduct?.quantity * +values.productPrice +
								  +currentState?.selectedProduct?.quantity * +values.additionalPrice
								: +cartState?.cart?.selectedEditItem?.quantity * +values.productPrice +
								  +cartState?.cart?.selectedEditItem?.quantity * +values.additionalPrice}
						</span>
					</button>
				</div>
			</div>
		</form>
	);
};
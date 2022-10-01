import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../redux/slices/cart/cartSlice";
import { useSelectProduct } from "./useSelectProduct";

export const useCartValues = () => {
	const dispatch = useDispatch();
	const { currentState } = useSelectProduct();
	const cartState = useSelector(state => state.cart.cart);
	const actionType = cartState.actionType;
	const [values, setValues] = useState({
		id: currentState?.selectedProduct?.id || 0,
		title: "",
		size: cartState?.selectedEditItem?.size || {type: "Mediana", id: 0},
		dough: cartState?.selectedEditItem?.dough || {type: "Masa normal", id: 0},
		ingredients: cartState?.selectedEditItem?.ingredients || [],
		rawIngredients: cartState?.selectedEditItem?.rawIngredients || [],
		drinks: cartState?.selectedEditItem?.drinks || [],
		rawDrinks: cartState?.selectedEditItem?.rawDrinks || [],
		img: "",
		productPrice: cartState?.cart?.selectedEditItem?.productPrice || 0,
		additionalPrice: cartState?.cart?.selectedEditItem?.additionalPrice || 0,
		quantity: 1,
		productSubTotal: cartState?.cart?.selectedEditItem?.productSubtotal || 0,
	});
	const [basketValues, setBasketValues] = useState([]);
	return {
		dispatch,
		handleAddToCart,
		cartState,
		actionType,
		currentState,
		values, setValues,
		basketValues, setBasketValues,
	};
};
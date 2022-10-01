import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: {
			actionType: "",
			selectedEditItem: null,
			cartLength: 0,
			totalPrice: 0,
			data: [],
			apiData: {
				id: undefined,
				products: [],
			},
		}
	},
	reducers: {
		setActionType: (state, action) => {
			if(action.payload.type === "edit") {
				state.cart.selectedEditItem = state.cart.data.find(item => item.id === +action.payload.id);
			};
			state.cart.actionType = action.payload.type;
		},
		handleSelectedEditItemQuantity: (state, action) => {
			if(action.payload === "increase") {
				state.cart.selectedEditItem.quantity += 1;
			} else if(action.payload === "decrease") {
				state.cart.selectedEditItem.quantity -= 1;
			};
		},
		handleCartItemQuantity: (state, action) => {
			let cartItem = state.cart.data.find(item => item.id === +action.payload.itemID);
			let acumulator = 0;
			if(action.payload.actionType === "increase") {
				cartItem.quantity = +cartItem?.quantity + 1;
				state.cart.data.map(cartItem => {
					acumulator += +cartItem.productSubTotal * +cartItem.quantity;
		});
			} else if(action.payload.actionType === "decrease") {
				cartItem.quantity = +cartItem?.quantity - 1;
				state.cart.data.map(cartItem => {
					acumulator += +cartItem.productSubTotal * +cartItem.quantity;
				});
			};
			state.cart.totalPrice = acumulator;
		},
		handleAddToCart: (state, action) => {
			if(action.payload.data.length > 0) {
				state.cart.data = [...state.cart.data, ...action.payload.data];
				state.cart.totalPrice = +state.cart.totalPrice + action.payload.totalPrice;
			} else {
				state.cart.data = [...state.cart.data, action.payload.data];
				state.cart.totalPrice = +state.cart.totalPrice +action.payload.data.productSubTotal * +action.payload.data.quantity;
			}
			state.cart.cartLength = state.cart.data.length;
			if(action.payload.apiData) {
				state.cart.apiData.id = action.payload.apiData.id;
				state.cart.apiData.products = [...state.cart.apiData.products, ...action.payload.apiData.products];
			}
		},
		handleEditCartItem: (state, action) => {
			let acumulator = 0;
			let newItems = state.cart.data.filter(item => item.id !==  +action.payload.data.id);
			let minus = +state.cart.selectedEditItem.productPrice + +state.cart.selectedEditItem.additionalPrice;
			state.cart.data = [...newItems, action.payload.data];
			state.cart.totalPrice = action.payload.totalPrice - minus;
			state.cart.data.map(cartItem => {
				acumulator += +cartItem.productSubTotal * +cartItem.quantity;
			});
			state.cart.totalPrice = acumulator;
			state.cart.selectedEditItem = null;
			if(action.payload.apiData) {
				// let newDrinksApiItems = action.payload.apiData.products.filter(newDrinkApiItem => newDrinkApiItem.isDrink);
				// let newSingleApiItem = action.payload.apiData.products.filter(newSingleApiItem => !newSingleApiItem.isDrink)[0];
				if(state.cart.apiData.products.find(apiDataItem => apiDataItem.productId === newSingleApiItem.productId)) {
					state.cart.apiData.products = [ ...state.cart.apiData.products];
				};
			}
		},
		handleDeleteCartItem: (state, action) => {
			const apiDrinks = state.cart.apiData.products.filter(item => item.isDrink);
			const apiProducts = state.cart.apiData.products.filter(item => !item.isDrink);
			const finalApiProducts = [...apiProducts.filter(item => item.productId !== +action.payload), ...apiDrinks.filter(item => item.productRelationNumber !== +action.payload)];
			let acumulator = 0;
			let productPrice = state.cart.data.find(item => item.id === +action.payload);
			state.cart.data = state.cart.data.filter(item => item.id !== +action.payload);
			state.cart.totalPrice = state.cart.totalPrice - +productPrice.productPrice - +productPrice.additionalPrice;
			state.cart.cartLength -= 1;
			state.cart.data.map(cartItem => {
				acumulator += +cartItem.productSubTotal * +cartItem.quantity;
			});
			state.cart.totalPrice = acumulator;
			state.cart.apiData.products = finalApiProducts;
			if(finalApiProducts.length < 1) {
				state.cart.apiData.id = undefined;
			}
		},
	}
});

export const { 
	handleCartItemQuantity,
	handleSelectedEditItemQuantity,
	handleAddToCart, 
	handleDeleteCartItem, 
	handleEditCartItem,
	setActionType 
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
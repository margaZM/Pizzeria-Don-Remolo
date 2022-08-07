import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: {
			actionType: "",
			selectedEditItem: {},
			cartLength: 0,
			totalPrice: 0,
			data: []
		}
	},
	reducers: {
		setActionType: (state, action) => {
			if(action.payload.type === "edit") {
				state.cart.selectedEditItem = state.cart.data.find(item => item.id === +action.payload.id);
			};
			state.cart.actionType = action.payload.type;
		},
		handleCartItemQuantity: (state, action) => {
			let cartItem = state.cart.data.find(item => item.id === +action.payload.itemID);
			let acumulator = 0;
			if(action.payload.actionType === "increase") {
				cartItem.quantity = +cartItem?.quantity + 1;
				state.cart.data.map(cartItem => {
					acumulator += +cartItem.productSubtotal * +cartItem.quantity;
		});
			} else if(action.payload.actionType === "decrease") {
				cartItem.quantity = +cartItem?.quantity - 1;
				state.cart.data.map(cartItem => {
					acumulator += +cartItem.productSubtotal * +cartItem.quantity;
				});
			};
			state.cart.totalPrice = acumulator;
		},
		handleAddToCart: (state, action) => {
			state.cart.data = [...state.cart.data, action.payload.data];
			state.cart.totalPrice = action.payload.totalPrice;
			state.cart.cartLength = state.cart.data.length;
			state.cart.totalPrice = +action.payload.data.productSubtotal * +action.payload.data.quantity;
		},
		handleEditCartItem: (state, action) => {
			let acumulator = 0;
			let newItems = state.cart.data.filter(item => item.id !==  +action.payload.data.id);
			let minus = +state.cart.selectedEditItem.productPrice + +state.cart.selectedEditItem.additionalPrice;
			state.cart.data = [...newItems, action.payload.data];
			state.cart.totalPrice = action.payload.totalPrice - minus;
			state.cart.data.map(cartItem => {
				acumulator += +cartItem.productSubtotal * +cartItem.quantity;
			});
			state.cart.totalPrice = acumulator;
		},
		handleDeleteCartItem: (state, action) => {
			let acumulator = 0;
			let productPrice = state.cart.data.find(item => item.id === +action.payload);
			state.cart.data = state.cart.data.filter(item => item.id !== +action.payload);
			state.cart.totalPrice = state.cart.totalPrice - +productPrice.productPrice - +productPrice.additionalPrice;
			state.cart.cartLength -= 1;
			state.cart.data.map(cartItem => {
				acumulator += +cartItem.productSubtotal * +cartItem.quantity;
			});
			state.cart.totalPrice = acumulator;
		},
	}
});

export const { 
	handleCartItemQuantity,
	handleAddToCart, 
	handleDeleteCartItem, 
	handleEditCartItem, 
	setActionType 
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
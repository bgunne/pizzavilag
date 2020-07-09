import {
	ADD_SHOPPINGCART,
	DELETE_SHOPPINGCART,
	EMPTY_SHOPPINGCART,
	SIZE_CHANGE,
	SUMPRICE_CHANGE,
	LOAD_USER,
	UPDATE_USER,
	SIGNIN,
	ADMIN,
	SIGNOUT,

	UPDATE_PIZZALIST,
	DELETE_PIZZA,
	UPLOAD_PIZZA,
	UPDATE_PIZZA
} from '../actiontypes/app.js';
import { Constants } from '../../utils/Constants.js';
const initialStatePizzaList = {
	isPending: false,
	pizzaList: []
}
export const managePizzaList = (state = initialStatePizzaList, action = {}) => {
	switch (action.type) {
		case UPDATE_PIZZALIST:
		case DELETE_PIZZA:
		case UPLOAD_PIZZA:
		case UPDATE_PIZZA:
			console.log("dispatch", action.type);
			return { ...state, pizzaList: action.payload, isPending: false };
		default: return state;
	}
}
const initialStateShoppingCart = {
	shoppingCart: [],
	sumPrice: 0
}
export const manageCart = (state = initialStateShoppingCart, action = {}) => {
	switch (action.type) {
		case ADD_SHOPPINGCART:
		case DELETE_SHOPPINGCART:
		case EMPTY_SHOPPINGCART:
			return { ...state, shoppingCart: action.payload };
		case SUMPRICE_CHANGE:
			return { ...state, sumPrice: action.payload };
		default: return state;
	}
}
const initialStateSize = {
	priceMultiplier: Constants.PizzaBasePriceMultiplier,
	size: Constants.PizzaBaseSize
}
export const manageSize = (state = initialStateSize, action = {}) => {
	switch (action.type) {
		case SIZE_CHANGE:
			return { ...state, size: action.payload.size, priceMultiplier: action.payload.priceMultiplier };
		default: return state;
	}
}
const initialStateUser = {
	user:
	{
		id: '',
		email: '',
		firstname: '',
		lastname: '',
		phone: '',
		zip: '',
		city: '',
		address: '',
		comment: '',
		role: '',
		joined: ''
	},
	isAdmin: false,
	isSignedIn: false
}
export const manageUser = (state = initialStateUser, action = {}) => {
	switch (action.type) {
		case LOAD_USER:
		case UPDATE_USER:
			return { ...state, user: action.payload };
		case SIGNIN:
			return { ...state, isSignedIn: true };
		case ADMIN:
			return { ...state, isAdmin: true };
		case SIGNOUT:
			return { ...state, isSignedIn: false, isAdmin: false, user: [] };
		default: return state;
	}
}
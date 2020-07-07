import {
	REQUEST_PIZZAS_PENDING,
	REQUEST_PIZZAS_SUCCESS,
	DELETE_PIZZA_PENDING,
	DELETE_PIZZA_SUCCESS,
	UPDATE_PIZZA_PENDING,
	UPDATE_PIZZA_SUCCESS,
	UPLOAD_PIZZA_PENDING,
	UPLOAD_PIZZA_SUCCESS,
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
} from '../actiontypes/app.js';
import { Constants } from '../../utils/Constants.js';
const initialStatePizzaList = {
	isPending: false,
	pizzaList: []
}
export const managePizzaList = (state = initialStatePizzaList, action = {}) => {
	switch (action.type) {
		case REQUEST_PIZZAS_PENDING:
		case UPDATE_PIZZA_PENDING:
		case DELETE_PIZZA_PENDING:
		case UPLOAD_PIZZA_PENDING:
			return { ...state, isPending: true };
		case REQUEST_PIZZAS_SUCCESS:
		case DELETE_PIZZA_SUCCESS:
		case UPDATE_PIZZA_SUCCESS:
		case UPLOAD_PIZZA_SUCCESS:
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
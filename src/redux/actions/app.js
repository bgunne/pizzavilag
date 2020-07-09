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
} from "../actiontypes/app.js";
import { Constants } from "../../utils/Constants.js";
export class PizzaActions {
	static updatePizzaList = (pizzaList) => {
		return {
			type: UPDATE_PIZZALIST,
			payload: pizzaList
		}
	}
	static deletePizza = () => {
		return {
			type: DELETE_PIZZA,
			payload: []
		}
	}
	static uploadPizza = () => {
		return {
			type: UPLOAD_PIZZA,
			payload: []
		}
	}
	static updatePizza = () =>{
		return {
			type: UPDATE_PIZZA,
			payload: []
		}
	}
}
export const addToCart = (dispatch, pizza, shoppingCart) => {
	const newCart = [...shoppingCart, pizza];
	dispatch({ type: ADD_SHOPPINGCART, payload: newCart });
};
export const deleteFromCart = (dispatch, item, shoppingCart) => {
	const newCart = [...shoppingCart];
	newCart.forEach(function (pizza, index) {
		if (pizza.id === item.id) {
			newCart.splice(index, 1);
		}
	});
	dispatch({ type: DELETE_SHOPPINGCART, payload: newCart });
};
export const emptyCart = (dispatch) => {
	dispatch({ type: EMPTY_SHOPPINGCART, payload: [] });
};
export const sumPriceChange = (dispatch, sumPrice) => {
	dispatch({ type: SUMPRICE_CHANGE, payload: sumPrice });
};
export const sizeChange = (dispatch, size) => {
	switch (size) {
		case Constants.PizzaBaseSize:
			dispatch({ type: SIZE_CHANGE, payload: { size: Constants.PizzaBaseSize, priceMultiplier: Constants.PizzaBasePriceMultiplier } }); break;
		case Constants.PizzaMediumSize:
			dispatch({ type: SIZE_CHANGE, payload: { size: Constants.PizzaMediumSize, priceMultiplier: Constants.PizzaMediumPriceMultiplier } }); break;
		case Constants.PizzaLargeSize:
			dispatch({ type: SIZE_CHANGE, payload: { size: Constants.PizzaLargeSize, priceMultiplier: Constants.PizzaLargePriceMultiplier } }); break;
		default: console.error("Érvénytelen méret.");
	}
};
export const loadUser = (dispatch, data) => {
	dispatch({
		type: LOAD_USER, payload: {
			id: data.id,
			email: data.email,
			firstname: data.firstname,
			lastname: data.lastname,
			phone: data.phone,
			zip: data.zip,
			city: data.city,
			address: data.address,
			comment: data.comment,
			role: data.role,
			joined: data.joined
		}
	});
};
export const updateUser = (dispatch, user) => {
	dispatch({ type: UPDATE_USER, payload: user });
};
export const signIn = (dispatch) => {
	dispatch({ type: SIGNIN });
}
export const signOut = (dispatch) => {
	dispatch({ type: SIGNOUT })
}
export const admin = (dispatch) => {
	dispatch({ type: ADMIN });
}

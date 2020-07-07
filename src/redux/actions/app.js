import {
	REQUEST_PIZZAS_PENDING,
	REQUEST_PIZZAS_SUCCESS,
	DELETE_PIZZA_PENDING,
	DELETE_PIZZA_SUCCESS,
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
	UPDATE_PIZZA_PENDING,
	UPDATE_PIZZA_SUCCESS,
} from "../actiontypes/app.js";
import Api from "../../api/Api.js";
import { Constants } from "../../utils/Constants.js";
export const requestPizzaList = async (dispatch) => {
	dispatch({ type: REQUEST_PIZZAS_PENDING });
	const pizzaList = await (await Api.getPizzaList()).json();
	dispatch({ type: REQUEST_PIZZAS_SUCCESS, payload: pizzaList });
};
export const deletePizza = async (dispatch, id) => {
	dispatch({ type: DELETE_PIZZA_PENDING });
	await Api.deletePizza(id);
	dispatch({ type: DELETE_PIZZA_SUCCESS, payload: [] });
}
export const uploadPizza = async (dispatch, name, topping, price, imageurl) => {
	dispatch({ type: UPLOAD_PIZZA_PENDING });
	await Api.uploadPizza(name, topping, price, imageurl);
	dispatch({ type: UPLOAD_PIZZA_SUCCESS, payload: [] });
}
export const updatePizza = async (dispatch, id, name, topping, price, imageurl) => {
	dispatch({ type: UPDATE_PIZZA_PENDING });
	await Api.updatePizza(id, name, topping, price, imageurl)
	dispatch({ type: UPDATE_PIZZA_SUCCESS, payload: [] });
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

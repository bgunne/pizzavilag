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
	static updatePizza = () => {
		return {
			type: UPDATE_PIZZA,
			payload: []
		}
	}
}
export class OrderActions {
	static addToCart = (pizza, shoppingCart) => {
		const newCart = [...shoppingCart, pizza];
		return {
			type: ADD_SHOPPINGCART,
			payload: newCart
		}
	}
	static deleteFromCart = (item, shoppingCart) => {
		const newCart = [...shoppingCart];
		newCart.forEach(function (pizza, index) {
			if (pizza.id === item.id) {
				newCart.splice(index, 1);
			}
		});
		return {
			type: DELETE_SHOPPINGCART,
			payload: newCart
		}
	}
	static emptyCart = () => {
		return {
			type: EMPTY_SHOPPINGCART,
			payload: []
		}
	}
	static sumPriceChange = (sumPrice) => {
		return {
			type: SUMPRICE_CHANGE,
			payload: sumPrice
		}
	}
	static sizeChange = (size) => {
		switch (size) {
			case Constants.PizzaBaseSize:
				return { type: SIZE_CHANGE, payload: { size: Constants.PizzaBaseSize, priceMultiplier: Constants.PizzaBasePriceMultiplier } };
			case Constants.PizzaMediumSize:
				return { type: SIZE_CHANGE, payload: { size: Constants.PizzaMediumSize, priceMultiplier: Constants.PizzaMediumPriceMultiplier } };
			case Constants.PizzaLargeSize:
				return { type: SIZE_CHANGE, payload: { size: Constants.PizzaLargeSize, priceMultiplier: Constants.PizzaLargePriceMultiplier } };
			default: console.error("Érvénytelen méret.");
		}
	}
}

export class UserActions {
	static loadUser = (data) => {
		return {
			type: LOAD_USER,
			payload: {
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
		}
	}
	static updateUser = (user) => {
		return {
			type: UPDATE_USER,
			payload: user
		}
	}
	static signIn = () => {
		return { type: SIGNIN };
	}
	static signOut = () => {
		return { type: SIGNOUT };
	}
	static admin = () => {
		return { type: ADMIN };
	}
}
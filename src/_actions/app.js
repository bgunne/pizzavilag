import {
	REQUEST_PIZZAS_PENDING,
	REQUEST_PIZZAS_SUCCESS,
	CHANGE_SEARCHFIELD,
	FILTER_PIZZAS,
	ADD_SHOPPINGCART,
	DELETE_SHOPPINGCART,
	EMPTY_SHOPPINGCART,
	SIZE_CHANGE,
	SUMPRICE_CHANGE,
	LOAD_USER,
	UPDATE_USER,
	SIGNIN,
	ADMIN,
	SIGNOUT
} from "../_actiontypes/app.js";

export const requestPizzas = async (dispatch) => {
	dispatch({ type: REQUEST_PIZZAS_PENDING });
	const response = await fetch("https://shielded-coast-80926.herokuapp.com/",
		{
			method: "get",
		});
	const pizzas = await response.json();
	dispatch({ type: REQUEST_PIZZAS_SUCCESS, payload: pizzas });
};

export const setSearchField = (text) => ({
	type: CHANGE_SEARCHFIELD,
	payload: text
});

export const filterPizzas = (dispatch, pizzas, searchField) => {
	if (pizzas.length && searchField.length) {
		const filteredPizzas = pizzas.filter(
			pizzas => {
				return pizzas.name.toLowerCase().includes(searchField.toLowerCase());
			});
		dispatch({ type: FILTER_PIZZAS, payload: filteredPizzas });
	}
	else if (pizzas.length) {
		dispatch({ type: FILTER_PIZZAS, payload: pizzas });
	}
	else {
		console.error("Nem sikerült betölteni a pizzákat.");
	}
};

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
		case Number(process.env.REACT_APP_BASE_SIZE):
			dispatch({ type: SIZE_CHANGE, payload: { size: Number(process.env.REACT_APP_BASE_SIZE), priceMultiplier: Number(process.env.REACT_APP_BASE_PRICEMULTIPLIER) } }); break;
		case Number(process.env.REACT_APP_MEDIUM_SIZE):
			dispatch({ type: SIZE_CHANGE, payload: { size: Number(process.env.REACT_APP_MEDIUM_SIZE), priceMultiplier: Number(process.env.REACT_APP_MEDIUM_PRICEMULTIPLIER) } }); break;
		case Number(process.env.REACT_APP_LARGE_SIZE):
			dispatch({ type: SIZE_CHANGE, payload: { size: Number(process.env.REACT_APP_LARGE_SIZE), priceMultiplier: Number(process.env.REACT_APP_LARGE_PRICEMULTIPLIER) } }); break;
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

/*export const updateUser = (dispatch, user) => {
	dispatch({ type: UPDATE_USER, payload: user });
};*/

export const signIn = (dispatch) => {
	dispatch({ type: SIGNIN });
}

export const signOut = (dispatch) => {
	dispatch({ type: SIGNOUT })
}

export const admin = (dispatch) => {
	dispatch({ type: ADMIN });
}
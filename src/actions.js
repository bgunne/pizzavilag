import {
    REQUEST_PIZZAS_PENDING,
    REQUEST_PIZZAS_SUCCESS,
    CHANGE_SEARCHFIELD,
    FILTER_PIZZAS,
    ADD_SHOPPINGCART,
    DELETE_SHOPPINGCART,
    EMPTY_SHOPPINGCART
} from './constants.js';

//App actions
export const requestPizzas = async (dispatch) => {
    dispatch({ type: REQUEST_PIZZAS_PENDING });
    const response = await fetch('https://shielded-coast-80926.herokuapp.com/',
        {
            method: 'get',
        });
    const pizzas = await response.json();
    dispatch({ type: REQUEST_PIZZAS_SUCCESS, payload: pizzas });
}

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const filterPizzas = (dispatch, pizzas, searchField) => {
    if (pizzas.length && searchField.length) {
        const filteredPizzas = pizzas.filter(
            pizzas => {
                return pizzas.name.toLowerCase().includes(searchField.toLowerCase());
            })
        dispatch({ type: FILTER_PIZZAS, payload: filteredPizzas });
    }
    else if (pizzas.length) {
        dispatch({ type: FILTER_PIZZAS, payload: pizzas });
    }
    else {
        console.error("Nem sikerült betölteni a pizzákat.");
    }
}

export const addToCart = (dispatch, pizza, shoppingCart) => {
    const newCart = [...shoppingCart, pizza];
    dispatch({ type: ADD_SHOPPINGCART, payload: newCart });
}

export const deleteFromCart = (dispatch, item, shoppingCart) => {
    const newCart = [...shoppingCart];
    newCart.forEach(function (pizza, index) {
        if (pizza.id === item.id) {
            newCart.splice(index, 1);
        }
    });
    dispatch({ type: DELETE_SHOPPINGCART, payload: newCart });
}

export const emptyCart = (dispatch) => {
    dispatch({ type: EMPTY_SHOPPINGCART, payload: [] })
}
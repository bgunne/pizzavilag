import {
    REQUEST_PIZZAS_PENDING,
    REQUEST_PIZZAS_SUCCESS,
    CHANGE_SEARCHFIELD
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
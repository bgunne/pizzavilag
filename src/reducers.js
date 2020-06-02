import {
    REQUEST_PIZZAS_PENDING,
    REQUEST_PIZZAS_SUCCESS,
    CHANGE_SEARCHFIELD,
    FILTER_PIZZAS,
    ADD_SHOPPINGCART,
    DELETE_SHOPPINGCART,
    EMPTY_SHOPPINGCART
} from './constants.js';

// App reducers
const initialStatePizzas = {
    isPending: false,
    pizzas: []
}
export const requestPizzas = (state = initialStatePizzas, action = {}) => {
    switch (action.type) {
        case REQUEST_PIZZAS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_PIZZAS_SUCCESS:
            return { ...state, pizzas: action.payload, isPending: false };
        default: return state;
    }
}

const initialStateSearch = {
    searchField: ''
}
export const searchPizzas = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD: return { ...state, searchField: action.payload };
        default: return state;
    }
}

const initialStateFilter = {
    filteredPizzas: []
}
export const filterPizzas = (state = initialStateFilter, action = {}) => {
    switch (action.type) {
        case FILTER_PIZZAS: return { ...state, filteredPizzas: action.payload };
        default: return state;
    }
}

const initialStateShoppingCart = {
    shoppingCart: []
}
export const manageCart = (state = initialStateShoppingCart, action = {}) => {
    switch (action.type) {
        case ADD_SHOPPINGCART:
        case DELETE_SHOPPINGCART:
        case EMPTY_SHOPPINGCART:
            return { ...state, shoppingCart: action.payload };
        default: return state;
    }
}
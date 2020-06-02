import {
    REQUEST_PIZZAS_PENDING,
    REQUEST_PIZZAS_SUCCESS,
    CHANGE_SEARCHFIELD
} from './constants.js';

// App reducers
const initialStatePizzas = {
    isPending: false,
    pizzas: []
}
export const requestPizzas = (state = initialStatePizzas, action = {}) => {
    switch (action.type) {
        case REQUEST_PIZZAS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_PIZZAS_SUCCESS:
            return Object.assign({}, state, { pizzas: action.payload, isPending: false });
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
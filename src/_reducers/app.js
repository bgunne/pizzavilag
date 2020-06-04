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
} from '../_actiontypes/app.js';

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
    priceMultiplier: Number(process.env.REACT_APP_BASE_PRICEMULTIPLIER),
    size: Number(process.env.REACT_APP_BASE_SIZE)
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
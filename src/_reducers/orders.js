import {
    REQUEST_ORDERS_PENDING,
    CHANGE_ORDER_PENDING,
    DELETE_ORDER_PENDING,
    REQUEST_ORDERS_SUCCESS,
    CHANGE_ORDER_SUCCESS,
    DELETE_ORDER_SUCCESS
} from '../_actiontypes/orders.js';
const initialStateOrders = {
    orders: [],
    isPending: false
}
export const manageOrders = (state = initialStateOrders, action = {}) => {
    switch (action.type) {
        case REQUEST_ORDERS_PENDING:
        case CHANGE_ORDER_PENDING:
        case DELETE_ORDER_PENDING:
            return { ...state, isPending: true }
        case REQUEST_ORDERS_SUCCESS:
            return { ...state, isPending: false, orders: action.payload };
        case CHANGE_ORDER_SUCCESS:
        case DELETE_ORDER_SUCCESS:
            return { ...state, isPending: false };
        default: return state;
    }
}
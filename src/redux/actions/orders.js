import {
    REQUEST_ORDERS_PENDING,
    CHANGE_ORDER_PENDING,
    DELETE_ORDER_PENDING,
    REQUEST_ORDERS_SUCCESS,
    CHANGE_ORDER_SUCCESS,
    DELETE_ORDER_SUCCESS
} from "../actiontypes/orders"
import Api from "../../api/Api";
export const requestOrders = async (dispatch) => {
    dispatch({ type: REQUEST_ORDERS_PENDING });
	const orders = await (await Api.getOrders()).json();
    dispatch({ type: REQUEST_ORDERS_SUCCESS, payload: orders });
}
export const changeOrder = async (dispatch, id, statusCode) => {
    dispatch({ type: CHANGE_ORDER_PENDING });
	await Api.changeOrder(id, statusCode);
    dispatch({ type: CHANGE_ORDER_SUCCESS });
    requestOrders(dispatch);
}
export const deleteOrder = async (dispatch, id) => {
    dispatch({ type: DELETE_ORDER_PENDING });
	await Api.deleteOrder(id);
    dispatch({ type: DELETE_ORDER_SUCCESS });
    requestOrders(dispatch);
}
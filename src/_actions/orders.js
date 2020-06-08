import {
    REQUEST_ORDERS_PENDING,
    CHANGE_ORDER_PENDING,
    DELETE_ORDER_PENDING,
    REQUEST_ORDERS_SUCCESS,
    CHANGE_ORDER_SUCCESS,
    DELETE_ORDER_SUCCESS
} from "../_actiontypes/orders"
export const requestOrders = async (dispatch) => {
    dispatch({ type: REQUEST_ORDERS_PENDING });
    const response = await fetch('https://shielded-coast-80926.herokuapp.com/orders',
        {
            method: 'get',
        });
    const orders = await response.json();
    dispatch({ type: REQUEST_ORDERS_SUCCESS, payload: orders });
}
export const changeOrder = async (dispatch, id, statusCode) => {
    dispatch({ type: CHANGE_ORDER_PENDING });
    await fetch('https://shielded-coast-80926.herokuapp.com/orders',
        {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify
                (
                    {
                        id: id,
                        statusCode: statusCode
                    }
                )
        });
    dispatch({ type: CHANGE_ORDER_SUCCESS });
    requestOrders(dispatch);
}
export const deleteOrder = async (dispatch, id) => {
    dispatch({ type: DELETE_ORDER_PENDING });
    await fetch('https://shielded-coast-80926.herokuapp.com/orders',
        {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify
                (
                    {
                        id: id
                    }
                )
        });
    dispatch({ type: DELETE_ORDER_SUCCESS });
    requestOrders(dispatch);
}
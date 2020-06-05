import { CHANGE_PIZZA_EDIT_FORM, LOAD_PIZZA_EDIT, EMPTY_PIZZA_EDIT } from "../_actiontypes/admin"

export const onPizzaEditFormChange = (dispatch, data, targetId) => {
    dispatch({ type: CHANGE_PIZZA_EDIT_FORM, payload: data, id: targetId });
}
export const loadPizzaEdit = (dispatch, pizza) => {
    dispatch({ type: LOAD_PIZZA_EDIT, payload: pizza });
}

export const emptyPizzaEdit = () => ({type: EMPTY_PIZZA_EDIT});
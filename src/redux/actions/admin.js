import { CHANGE_PIZZA_EDIT_FORM, LOAD_PIZZA_EDIT, EMPTY_PIZZA_EDIT, SET_EDIT_ID, SET_DELETE_ID, SET_MODIFICATION_TYPE, CHANGE_FILE_INPUT } from "../actiontypes/admin"
export const onPizzaEditFormChange = (dispatch, data, targetId) => {
	dispatch({ type: CHANGE_PIZZA_EDIT_FORM, payload: data, id: targetId });
}
export const onFileInputChangeHandler = (dispatch, data) => {
	dispatch({ type: CHANGE_FILE_INPUT, payload: data });
}
export const loadPizzaEdit = (dispatch, pizza) => {
	dispatch({ type: LOAD_PIZZA_EDIT, payload: pizza });
}
export const emptyPizzaEdit = () => ({ type: EMPTY_PIZZA_EDIT });
export const setEditId = (dispatch, id) => {
	dispatch({ type: SET_EDIT_ID, payload: id });
}
export const setDeleteId = (dispatch, id) => {
	dispatch({ type: SET_DELETE_ID, payload: id });
}
export const setModificationType = (dispatch, type) => {
	dispatch({ type: SET_MODIFICATION_TYPE, payload: type });
}
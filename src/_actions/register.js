import { CHANGE_REGISTER_FORM } from "../_actiontypes/register.js"

export const onRegisterFormChange = (dispatch, data, targetId) => {
    dispatch({type: CHANGE_REGISTER_FORM, payload: data, id:targetId});
}
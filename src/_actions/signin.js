import { CHANGE_SIGNIN_FORM } from "../_actiontypes/signin"
export const onSigninFormChange = (dispatch, data, targetId) => {
    dispatch({ type: CHANGE_SIGNIN_FORM, payload: data, id: targetId });
}
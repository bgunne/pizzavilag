import { GUEST_ORDER } from "../_actiontypes/order"

export const loadGuest = (dispatch, data) => {
    dispatch({
        type: GUEST_ORDER, payload: {
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            phone: data.phone,
            zip: data.zip,
            city: data.city,
            address: data.address,
            comment: data.comment
        }
    });
}
import { GUEST_ORDER } from '../_actiontypes/order.js';
const initialStateGuest = {
    guest:
    {
        email: '',
        firstname: '',
        lastname: '',
        phone: '',
        zip: '',
        city: '',
        address: '',
        comment: ''
    }
}
export const manageGuest = (state = initialStateGuest, action = {}) => {
    switch (action.type) {
        case GUEST_ORDER: return { ...state, guest: action.payload };
        default: return state;
    }
}
import { CHANGE_REGISTER_FORM } from "../_actiontypes/register"
const initialStateRegisterForm = {
    email: '',
    password: '',
    password2: '',
    firstname: '',
    lastname: '',
    phone: '',
    zip: '',
    city: '',
    address: '',
    comment: ''
}
export const onRegisterFormChange = (state = initialStateRegisterForm, action = {}) => {
    switch (action.type) {
        case CHANGE_REGISTER_FORM: return { ...state, [action.id]: action.payload };
        default: return state;
    }
}
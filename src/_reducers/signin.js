import { CHANGE_SIGNIN_FORM} from "../_actiontypes/signin"
const initialStateSigninForm = {
    signInEmail: '',
    signInPassword: ''
}
export const onSigninFormChange = (state = initialStateSigninForm, action = {}) => {
    switch (action.type) {
        case CHANGE_SIGNIN_FORM: return { ...state, [action.id]: action.payload };
        default: return state;
    }
}
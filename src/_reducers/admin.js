import { CHANGE_PIZZA_EDIT_FORM, LOAD_PIZZA_EDIT, EMPTY_PIZZA_EDIT } from "../_actiontypes/admin"

const initialStatePizzaEditForm = {
    pizzaEdit: {
        id: '',
        name: '',
        topping: '',
        price: '',
        imageurl: ''
    }
}

export const onPizzaEditFormChange = (state = initialStatePizzaEditForm, action = {}) => {
    switch (action.type) {
        case CHANGE_PIZZA_EDIT_FORM: return { ...state, pizzaEdit: {...state.pizzaEdit, [action.id]:action.payload} };
        case LOAD_PIZZA_EDIT: return { ...state, pizzaEdit: action.payload };
        case EMPTY_PIZZA_EDIT: return { ...state, pizzaEdit: initialStatePizzaEditForm.pizzaEdit }
        default: return state;
    }
}
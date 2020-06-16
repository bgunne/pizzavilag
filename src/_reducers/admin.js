import { CHANGE_PIZZA_EDIT_FORM, LOAD_PIZZA_EDIT, EMPTY_PIZZA_EDIT, SET_EDIT_ID, SET_DELETE_ID, SET_MODIFICATION_TYPE, CHANGE_FILE_INPUT } from "../_actiontypes/admin"
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
        case CHANGE_PIZZA_EDIT_FORM: return { ...state, pizzaEdit: { ...state.pizzaEdit, [action.id]: action.payload } };
        case LOAD_PIZZA_EDIT: return { ...state, pizzaEdit: action.payload };
        case EMPTY_PIZZA_EDIT: return { ...state, pizzaEdit: initialStatePizzaEditForm.pizzaEdit }
        default: return state;
    }
}
const initialStateManageEdit = {
    editId: '',
    deleteId: '',
    modificationType: '',
    selectedFile: ''
}
export const manageEdit = (state = initialStateManageEdit, action = {}) => {
    switch (action.type) {
        case SET_EDIT_ID: return { ...state, editId: action.payload };
        case SET_DELETE_ID: return { ...state, deleteId: action.payload };
        case SET_MODIFICATION_TYPE: return { ...state, modificationType: action.payload };
        case CHANGE_FILE_INPUT: return { ...state, selectedFile: action.payload };
        default: return state;
    }
}
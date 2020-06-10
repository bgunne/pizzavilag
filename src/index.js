import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App/App';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { managePizzas, searchPizzas, filterPizzas, manageCart, manageSize, manageUser } from './_reducers/app';
import { onRegisterFormChange } from './_reducers/register';
import { onSigninFormChange} from './_reducers/signin';
import { manageGuest } from './_reducers/order';
import { onPizzaEditFormChange } from './_reducers/admin';
import { manageEdit } from './_reducers/admin';
import { manageOrders } from './_reducers/orders';
const logger = createLogger();
const rootReducer = combineReducers({
  managePizzas, searchPizzas, filterPizzas, manageCart, manageSize, manageUser,
  onRegisterFormChange,
  onSigninFormChange,
  manageGuest,
  onPizzaEditFormChange,
  manageEdit,
  manageOrders
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

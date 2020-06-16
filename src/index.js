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
import { onSigninFormChange } from './_reducers/signin';
import { manageGuest } from './_reducers/order';
import { onPizzaEditFormChange } from './_reducers/admin';
import { manageEdit } from './_reducers/admin';
import { manageOrders } from './_reducers/orders';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import storage from 'redux-persist/lib/storage';
import { IntlProvider } from 'react-intl';
import locale_hu from "./translations/hu.json";
import locale_en from "./translations/en.json";
const data = {
  'hu': locale_hu,
  'en': locale_en
};
const language = "hu"//TODO: English translate + language switch, then: navigator.language.split(/[-_]/)[0];
const persistConfig = {
  key: 'root',
  storage
}
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
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, logger));
const persistor = persistStore(store);
ReactDOM.render(
  <IntlProvider locale={language} messages={data[language]}>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);

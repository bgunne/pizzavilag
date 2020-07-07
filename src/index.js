import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// uncomment this for enable redux logging
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { managePizzaList, manageCart, manageSize, manageUser } from './redux/reducers/app';
import { onRegisterFormChange } from './redux/reducers/register';
import { onSigninFormChange } from './redux/reducers/signin';
import { manageGuest } from './redux/reducers/order';
import { onPizzaEditFormChange } from './redux/reducers/admin';
import { manageEdit } from './redux/reducers/admin';
import { manageOrders } from './redux/reducers/orders';
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
// uncomment this for enable redux logging
// const logger = createLogger();
const rootReducer = combineReducers({
	managePizzaList, manageCart, manageSize, manageUser,
	onRegisterFormChange,
	onSigninFormChange,
	manageGuest,
	onPizzaEditFormChange,
	manageEdit,
	manageOrders
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware/*uncomment this for enable redux logging ->*//* , logger*/));
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

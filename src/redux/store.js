import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { managePizzaList, manageCart, manageSize, manageUser } from './reducers/app';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
	key: 'root',
	storage
}
const rootReducer = combineReducers({
	managePizzaList, manageCart, manageSize, manageUser
});

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
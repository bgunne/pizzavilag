import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { IntlProvider } from 'react-intl';
import { store, persistor } from './redux/store';
import locale_hu from "./translations/hu.json";
import locale_en from "./translations/en.json";

const data = {
	'hu': locale_hu,
	'en': locale_en
};
const language = "hu"//TODO: English translate + language switch, then: navigator.language.split(/[-_]/)[0];

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<IntlProvider locale={language} messages={data[language]}>
				<App/>
			</IntlProvider>
		</PersistGate>
	</Provider>
	,
	document.getElementById('root')
);

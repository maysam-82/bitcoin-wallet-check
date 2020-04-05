import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './Containers/App/App';
import './index.scss';
render(
	<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.getElementById('root')
);

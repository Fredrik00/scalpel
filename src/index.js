import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './styles/index.css'
import 'typeface-roboto'
import App from './App'
//import registerServiceWorker from './registerServiceWorker'
import scalpelReducer from './reducers'
import moment from 'moment'
import 'moment/locale/nb'

moment.locale('nb')

const store = createStore(
	scalpelReducer,
	undefined, // Initial state in reducers
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'))

//registerServiceWorker()
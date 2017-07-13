import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './Containers/Home';
import './index.css';
import App from './App';
//go get the createStore method from the redux module
import { createStore} from 'redux';
//import the Provider from react-redux so react and redux can talk.
import { Provider} from 'react-redux';
//import root reducer(index.js) so we can give it to the store...fill those shelves!!!
import reducers from './reducers/rootreducer';

const theStore = createStore(reducers);
//reactdom.render takes 2 args(1. what, 2. where)
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>,
 	document.getElementById('root')
 );


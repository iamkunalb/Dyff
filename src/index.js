import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';


import cartReducer from './components/reducers/cart-reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(cartReducer, persistedState)

store.subscribe(() => {
    saveState(store.getState())
})


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
  document.getElementById('root')
);

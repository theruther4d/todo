import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import App from './containers/App';
import persistState from 'redux-localstorage';

const createPersistentStore = compose(
  persistState()
)( createStore );

const reducer = combineReducers( reducers );
const store = createPersistentStore( reducer );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById( 'app' )
);

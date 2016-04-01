import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import AppContainer from './containers/AppContainer';
import persistState from 'redux-localstorage';
import { addTodo, toggleTodo } from './actions';

const createPersistentStore = compose(
  persistState()
)( createStore );

const reducer = combineReducers( reducers );
const store = createPersistentStore( reducer );

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById( 'app' )
);

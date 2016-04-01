import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const getCurrentUser = ( users ) => {
    let currentUser = null;

    // Get the currently logged in user:
    Object.keys( users ).map( ( user ) => {
        if( users[user].loggedIn ) {
            currentUser = user;
        }
    });

    return currentUser;
};

const getTotalTodos = ( todos, viewFilter ) => {
    let count = 0;

    Object.keys( todos ).map( ( todo ) => {
        if( viewFilter === 'ALL' ) {
            count++;
        } else if( viewFilter === 'TODO' && !todos[todo].completed ) {
            count++;
        } else if( viewFilter === 'COMPLETED' && todos[todo].completed ) {
            count++;
        }
    });

    return count;
};

const mapStateToProps = ( state ) => {
    return {
        hasTodos: getTotalTodos( state.todos, state.view ),
        currentUser: getCurrentUser( state.users ),
        editingState: state.editing
    }
};

const AppContainer = connect(
    mapStateToProps,
    null
)( App );

export default AppContainer;

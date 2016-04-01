import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import LoginForm from '../components/LogInForm';

class AppContainer extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        this.getProps();
        const editingClass = this._editingState ? 'editing' : '';

        return this._currentUser === false ? (
            <main>
                <LoginForm actions={this._actions}/>
            </main>
        ) : (
            <main className={editingClass}>
                <Header
                    currentUser={this._currentUser}
                    title={this._currentTitle}
                    actions={this._actions}
                    hasTodos={this._hasTodos}
                    isEditing={this._editingState}
                />
                <List
                    hasTodos={this._hasTodos}
                    viewFilter={this._currentView}
                    todos={this._currentTodos}
                    isEditing={this._editingState}
                    actions={this._actions}
                />
                <Footer
                    todos={this._todos}
                    viewFilter={this._currentView}
                    actions={this._actions}
                />
            </main>
        );
    }

    /** Gathers all the needed props. */
    getProps() {
        const { state, dispatch } = this.props;
        this._currentUser = this.getCurrentUser( state.users );
        this._currentView = this.getCurrentView( state );
        this._currentTitle = this.getCurrentTitle( state );
        this._editingState = this.getEditingState( state ) === true;
        this._todos = this.getTodosForView( this.getTodosForUser( state.todos, this._currentUser.user ), this._currentView );
        this._currentTodos = this._todos[this._currentView];
        this._hasTodos = Object.keys( this._currentTodos ).length > 0;
        this._actions = this.getBoundActions( actions, dispatch );

        const editingClass = this._editingState ? 'editing' : '';
    }

    /**
     * Retreives the current user.
     * @param {object} users - the state.users object.
     * @return {boolean || string} false, or the currentUser.
     */
    getCurrentUser( users ) {
        let currentUser = false;

        Object.keys( users ).map( ( user ) => {
            if( users[user].loggedIn ) {
                currentUser = {
                    user: user,
                    gravatar: users[user].gravatar
                };
            }
        });

        return currentUser;
    }

    /**
     * Retreives the current view.
     * @param {object} state.
     * @return {string} view.
     */
    getCurrentView( state ) {
        return state.view;
    }


    /**
     * Retreives the current title.
     * @param {object} state.
     * @return {string} title.
     */
    getCurrentTitle( state ) {
        return state.title;
    }

    /**
     * Retreives the current editing state.
     * @param {object} state.
     * @return {boolean} editing.
     */
    getEditingState( state ) {
        return state.editing;
    }

    /**
     * Gets the todos for a specified user.
     * @param {object} todos - the state's todos object.
     * @param {string} user - the email address of the user.
     * @return {object} userTodos.
     */
    getTodosForUser( todos, user ) {
        let userTodos = {};

        Object.keys( todos ).map( ( todo ) => {
            if( todos[todo].author !== user ) {
                return;
            }

            userTodos[todo] = todos[todo];
        });

        return userTodos;
    }

    /**
     * Returns todos for the current view filter.
     * @param {object} userTodos - the current user's todos.
     * @param {string} view - the current view.
     * @return {object} todos.
     */
    getTodosForView( userTodos, view ) {
        let viewTodos = {
            ALL: {},
            COMPLETED: {},
            TODO: {}
        };

        Object.keys( userTodos ).map( ( todo ) => {
            switch( view ) {
                case 'ALL':
                    viewTodos['ALL'][todo] = userTodos[todo];
                break;

                case 'COMPLETED':
                    if( userTodos[todo].completed ) {
                        viewTodos['COMPLETED'][todo] = userTodos[todo];
                    }
                break;

                case 'TODO':
                    if( !userTodos[todo].completed ) {
                        viewTodos['TODO'][todo] = userTodos[todo];
                    };
                break;
            }
        });

        return viewTodos;
    }

    /**
     * Returns bound action creators.
     * @param {function} actions
     * @param {function} dispatch.
     * @return {function} boundActions.
     */
    getBoundActions( actions, dispatch ) {
        return bindActionCreators( actions, dispatch );
    }
};

// Connect to the store:
AppContainer = connect( ( state ) => { return { state: state  } } )( AppContainer );

export default AppContainer;

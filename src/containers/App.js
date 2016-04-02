import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import LoginForm from '../components/Body/LogInForm';

class AppContainer extends Component {
    constructor( props ) {
        super( props );
        this._isFirstRender = true;
        console.dir( props.state );
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
        this._todos = this.getTodosForView( this.getTodosForUser( state.todos, this._currentUser.user ), this._currentView );
        this._currentTodos = this._todos[this._currentView];
        this._hasTodos = Object.keys( this._currentTodos ).length > 0;
        this._actions = this.getBoundActions( actions, dispatch );

        // Force the editingState to false on reload
        // and first render:
        if( this._isFirstRender ) {
            this._isFirstRender = false;
            this._editingState = false;
            dispatch( actions.setEditingState( false ) );
        } else {
            this._editingState = this.getEditingState( state ) === true;
        }

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
            Object.keys( viewTodos ).map( ( view ) => {
                const addToView = ( todo, view ) => {
                    viewTodos[view][todo] = userTodos[todo];
                };

                switch( view ) {
                    case 'ALL':
                        addToView( todo, view );
                    break;

                    case 'COMPLETED':
                        if( userTodos[todo].completed ) {
                            addToView( todo, view );
                        }
                    break;

                    case 'TODO':
                        if( !userTodos[todo].completed ) {
                            addToView( todo, view );
                        };
                    break;
                }
            });
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

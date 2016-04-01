import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../actions';
import List from '../components/List';

class ListContainer extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const state = this.props.state;
        const currentUser = this.getCurrentUser( state.users );
        const currentView = state.view;
        const todos = this.getTodosForView( state.todos, currentUser, currentView );
        const itemClick = ( _id ) => {
            this.props.dispatch( toggleTodo( _id ) );
        };
        const editClick = ( parent ) => {
            parent.classList.toggle( 'will-delete' );
        };
        const deleteClick = ( _id ) => {
            this.props.dispatch( deleteTodo( _id ) );
        };
        const submit = ( _id, text ) => {
            this.props.dispatch( editTodo( _id, text ) );
        }

        return (
            <List items={todos} viewFilter={currentView} itemClick={itemClick} editClick={editClick} deleteClick={deleteClick} submit={submit} editingState={this.props.editingState} />
        );
    }

    getCurrentUser( users ) {
        let currentUser = false;

        // Get the currently logged in user:
        Object.keys( users ).map( ( user ) => {
            if( users[user].loggedIn ) {
                currentUser = user;
            }
        });

        return currentUser;
    }

    getTodosForView( todos, currentUser, viewFilter ) {
        // Get User's todos:
        let userTodos = {};
        Object.keys( todos ).map( ( item ) => {
            const todo = todos[item];
            if( todo.author === currentUser ) {
                switch( viewFilter ) {
                    case 'COMPLETED':
                        if( todo.completed ) {
                            userTodos[item] = todos[item];
                        }

                        break;

                    case 'TODO':
                        if( !todo.completed ) {
                            userTodos[item] = todos[item];
                        }

                        break;

                    default:
                        userTodos[item] = todos[item];
                }
            }
        });

        return userTodos;
    }
};

ListContainer = connect( ( state ) => { return { state: state  } } )( ListContainer );

export default ListContainer;

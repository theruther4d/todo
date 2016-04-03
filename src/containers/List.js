import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DefaultMessage from '../components/Body/DefaultMessage';
import Item from '../components/Body/Item';

const List = ( { hasTodos, viewFilter, todos, isEditing, actions, currentList, lists, currentUser } ) => {
    const content = hasTodos ? getListItems( todos, isEditing, actions ) : <DefaultMessage viewFilter={viewFilter} />;

    if( !hasTodos ) {
        actions.setEditingState( false );
    }

    if( isEditing && content.length ) {
        content.unshift(
            <DeleteItem
                key="delete-item"
                actions={actions}
                currentList={currentList}
                lists={lists}
                currentUser={currentUser}
            />
        );
    }

    return (
        <ul className="todo">
            <ReactCSSTransitionGroup
                transitionName="item"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {content}
            </ReactCSSTransitionGroup>
        </ul>
    );
};

const DeleteItem = ( { actions, currentList, lists, currentUser } ) => {
    return (
        <li
            className="mobile-delete-list"
            onClick={ () => {
                actions.deleteList( currentList );
                actions.setEditingState( false );

                let nextList = false;
                Object.keys( lists ).map( ( list ) => {
                    if( list !== currentList ) {
                        nextList = list;
                    }
                });

                if( !nextList ) {
                    actions.setCurrentListForUser( currentUser.user, actions.createList( currentUser, 'Untitled' )._id );
                } else {
                    actions.setCurrentListForUser( currentUser.user, nextList );
                }
            }}
        >
            Delete this list
        </li>
    );
};

function getListItems( todos, isEditing, actions ) {
    return Object.keys( todos ).map( ( _id ) => {
        const todo = todos[_id];
        return (
            <Item
                key={_id}
                _id={_id}
                text={todo.text}
                completed={todo.completed}
                isEditing={isEditing}
                actions={actions}
            />
        );
    });
};

List.propTypes = {
    hasTodos: PropTypes.bool.isRequired,
    viewFilter: PropTypes.string.isRequired,
    todos: PropTypes.object.isRequired,
    isEditing: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    currentList: PropTypes.string.isRequired,
    lists: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired
};

export default List;

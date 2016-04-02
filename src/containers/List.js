import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DefaultMessage from '../components/Body/DefaultMessage';
import Item from '../components/Body/Item';

const List = ( { hasTodos, viewFilter, todos, isEditing, actions } ) => {
    const content = hasTodos ? getListItems( todos, isEditing, actions ) : <DefaultMessage viewFilter={viewFilter} />;

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
    actions: PropTypes.object.isRequired
};

export default List;

import React, { PropTypes } from 'react';
import Item from './Item';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const List = ( { items, viewFilter, itemClick, editClick, deleteClick, submit, editingState } ) => {
    if( !Object.keys( items ).length ) {
        let message;
        switch( viewFilter ) {
            case 'ALL':
                message = '📋 Start adding todos by typing in the box above!';
            break;

            case 'COMPLETED':
                message = '👈 Start checking off your todos by tapping them in the \'todo\' tab!';
            break;

            case 'TODO':
                message = '✨ Hooray! You\'ve completed all of your todos!';
            break;
        }
        return (
            <ul className="todo">
                <ReactCSSTransitionGroup
                    transitionName="item"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <li className="todo__default">{message}</li>
                </ReactCSSTransitionGroup>
            </ul>
        );
    } else {
        const todos = Object.keys( items ).map( ( item ) => {
            return (
                <Item
                    key={item}
                    _id={item}
                    { ...items[item] }
                    onClick={ () => itemClick( item ) }
                    editClick={editClick}
                    deleteClick={deleteClick}
                    editingState={editingState}
                    submit={submit}
                />
            );
        });

        return (
            <ul className="todo">
                <ReactCSSTransitionGroup
                    transitionName="item"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {todos}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }

};

List.propTypes = {
    items: PropTypes.objectOf( PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired ).isRequired,
    viewFilter: PropTypes.string.isRequired,
    itemClick: PropTypes.func.isRequired
};

export default List;

import React, { PropTypes } from 'react';

const DeleteButton = ( { _id, item, actions } ) => {

    const buttonClick = () => {
        actions.deleteTodo( _id );
    };

    const screenClick = () => {
        item.classList.remove( 'will-delete' );
    };

    return (
        <div>
            <div className="todo__item__delete" onClick={buttonClick}>
                <span className="todo__item__delete__text">Delete</span>
            </div>

            <div className="todo__item__screen" onClick={screenClick}></div>
        </div>
    );
};

DeleteButton.proptypes = {
    isEditing: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
    item: PropTypes.node.isRequired,
    actions: PropTypes.object.isRequired
};

export default DeleteButton;

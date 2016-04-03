import React, { PropTypes } from 'react';

const DeleteButton = ( { onClick } ) => {

    return (
        <div>
            <div className="todo__item__delete" onClick={onClick}>
                <span className="todo__item__delete__text">Delete</span>
            </div>
        </div>
    );
};

DeleteButton.proptypes = {
    onClick: PropTypes.func.isRequired
};

export default DeleteButton;

import React, { PropTypes } from 'react';
import MinusIcon from './MinusIcon';
import CheckIcon from './CheckIcon';

const Checkbox = ( { completed, isEditing, onClick } ) => {
    let icon;

    if( completed ) {
        icon = <CheckIcon />
    }

    if( isEditing ) {
        icon = <MinusIcon />
    }

    return (
        <div
            className="todo__item__check"
            onClick={onClick}>
            {icon}
        </div>
    );
};

Checkbox.proptypes = {
    completed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Checkbox;

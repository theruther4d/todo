import React, { PropTypes } from 'react';

const Text = ( { _id, text, actions } ) => {
    return (
        <input
            type="text"
            className="todo__item__text plain"
            defaultValue={text}
            onBlur={ ( e ) => {
                e.preventDefault();

                if( !e.target.value.trim() ) {
                    return;
                }

                actions.editTodo( _id, e.target.value );
            }}
        />
    );
};

Text.proptypes = {
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export default Text;

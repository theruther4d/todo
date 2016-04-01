import React, { PropTypes } from 'react';

const Body = ( { todos, isEditing, actions } ) => {

    return (
        <h1>Body is here</h1>
    );
};

Body.propTypes = {
    todos: PropTypes.object.isRequired,
    isEditing: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

export default Body;

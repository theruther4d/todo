import React, { PropTypes } from 'react';

const DefaultMessage = ( { viewFilter } ) => {
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
        <li key="default" className="todo__default">{message}</li>
    );
};

DefaultMessage.propTypes = {
    viewFilter: PropTypes.string.isRequired
};

export default DefaultMessage;

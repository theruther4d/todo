import React, { PropTypes } from 'react';

const MinusIcon = ( { className } ) => {
    className = className || '';

    return (
        <svg
            key={name}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
        >
        	<path d="M22,0C9.8,0,0,9.8,0,22c0,12.2,9.8,22,22,22c12.1,0,22-9.8,22-22C44,9.8,34.2,0,22,0z M36.2,24.6H7.8v-5.2 h28.4V24.6z" />
        </svg>
    );
};

MinusIcon.propTypes = {
    className: PropTypes.string,
};

export default MinusIcon;

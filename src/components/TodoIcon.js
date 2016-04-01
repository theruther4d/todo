import React, { PropTypes } from 'react';

const TodoIcon = ( { className } ) => {
    className = className || '';

    return (
        <svg
            key={name}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44">
                <path d="M22,44C9.9,44,0,34.1,0,22C0,9.9,9.9,0,22,0c12.1,0,22,9.9,22,22C44,34.1,34.1,44,22,44z M22,2.8 C11.4,2.8,2.8,11.4,2.8,22c0,10.6,8.6,19.2,19.2,19.2c10.6,0,19.2-8.6,19.2-19.2C41.2,11.4,32.6,2.8,22,2.8z"/>
        </svg>
    );
};

TodoIcon.propTypes = {
    className: PropTypes.string,
};

export default TodoIcon;

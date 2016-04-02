import React, { PropTypes } from 'react';

const CheckIcon = ( { className } ) => {
    className = className || '';

    return (
        <svg
            key={name}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44">
                <path d="M20.9,32.4l15.3-17.5l-3.9-3.4L20.4,25.1l-9.2-8l-3.4,4L20.9,32.4L20.9,32.4z M22,0c12.1,0,22,9.8,22,22 c0,12.2-9.8,22-22,22C9.8,44,0,34.2,0,22C0,9.8,9.8,0,22,0z"/>
        </svg>
    );
};

CheckIcon.propTypes = {
    className: PropTypes.string,
};

export default CheckIcon;

import React, { PropTypes } from 'react';

const AllIcon = ( { className } ) => {
    className = className || '';

    return (
        <svg
            key={name}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="11 0 66 44">
                <path d="M33,2c1.6,0,3.2,0.2,4.7,0.6C32.2,7.5,29,14.5,29,22s3.2,14.6,8.8,19.5C36.2,41.8,34.6,42,33,42
                c-11,0-20-9-20-20S22,2,33,2 M33,0C20.8,0,11,9.8,11,22s9.8,22,22,22c3.2,0,6.2-0.7,8.9-1.9C35.4,37.8,31,30.4,31,22
                S35.4,6.2,41.9,1.9C39.2,0.7,36.2,0,33,0L33,0z M53.9,32.4l15.3-17.5l-3.9-3.4L53.4,25.1l-9.2-8l-3.4,4L53.9,32.4L53.9,32.4z M55,0
                c12.1,0,22,9.8,22,22s-9.8,22-22,22s-22-9.8-22-22S42.8,0,55,0z" />
        </svg>
    );
};

AllIcon.propTypes = {
    className: PropTypes.string,
};

export default AllIcon;

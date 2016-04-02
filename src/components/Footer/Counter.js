import React, { PropTypes } from 'react';

const Counter = ( { count } ) => {
    return (
        <span className="counter">{count}</span>
    );
};

Counter.proptypes = {
    count: PropTypes.number.isRequired
};

export default Counter;

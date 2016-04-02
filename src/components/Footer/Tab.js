import React, { PropTypes } from 'react';
import Counter from './Counter';

const Tab = ( { icon, text, count, selected, onClick } ) => {
    const selectedClass = `tab ${selected ? 'selected' : ''}`;
    return (
        <li
            className={selectedClass}
            onClick={onClick}
        >
            <div className="tab__inner">
                {icon}
                <span className="tab__text">{text.toLowerCase()}</span>
                <Counter count={count} />
            </div>
        </li>
    );
};

Tab.proptypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Tab;

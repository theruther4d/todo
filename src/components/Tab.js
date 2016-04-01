import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';

class Tab extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const { viewFilter, onClick, name, children } = this.props;
        const selected = viewFilter === this.props.state.view;
        const selectedClass = `tab ${selected ? 'selected' : ''}`;

        return (
            <li
                key={name}
                className={`tab ${selectedClass}`}
                onClick={onClick}
            >
                <div className="tab__inner">
                    {this.props.children}
                    {name}
                    <Counter viewFilter={viewFilter} />
                </div>
            </li>
        )
    }
};

// Listen for updates:
Tab = connect( ( state ) => { return { state: state  } } )( Tab );

Tab.propTypes = {
    viewFilter: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Tab;

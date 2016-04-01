import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <span className="counter">{this.getCount()}</span>
        );
    }

    getCount() {
        const todos = this.props.todos;
        const viewFilter = this.props.viewFilter;
        let count = 0;

        Object.keys( todos ).map( ( todo ) => {
            if( viewFilter === 'ALL' ) {
                count++;
            } else if( viewFilter === 'TODO' && !todos[todo].completed ) {
                count++;
            } else if( viewFilter === 'COMPLETED' && todos[todo].completed ) {
                count++;
            }
        })

        return count;
    }
};

Counter = connect( ( state ) => { return state } )( Counter );

export default Counter;

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const currentUser = this.getCurrentUser( this.props.users );
        const count = this.getCount( currentUser );
        return (
            <span className="counter">{count}</span>
        );
    }

    getCurrentUser( users ) {
        let currentUser = null;

        // Get the currently logged in user:
        Object.keys( users ).map( ( user ) => {
            if( users[user].loggedIn ) {
                currentUser = user;
            }
        });

        return currentUser;
    }

    getCount( currentUser ) {
        const todos = this.props.todos;
        const viewFilter = this.props.viewFilter;
        let count = 0;

        Object.keys( todos ).map( ( todo ) => {
            if( todos[todo].author !== currentUser ) {
                return;
            }

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

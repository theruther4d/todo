import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapStateToProps = ( state ) => {
    return {
        users: state.users
    }
};

class AddForm extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        let input;

        return (
            <form
            className="addTodo"
            onSubmit={ ( e ) => {
                e.preventDefault();
                const text = input.value;

                if( !text.trim() ) {
                    return;
                }

                this.props.dispatch( addTodo( text, this.getLoggedInUser( this.props.users ) ) );
                input.value = '';
            }}>
                <input type="text" ref={ ( node ) => { input = node } } placeholder="add todo" />
                <input type="submit" value="add" />
            </form>
        );
    }

    getLoggedInUser( users ) {
        let loggedInUser = false;

        Object.keys( users ).map( ( user ) => {
            if( users[user].loggedIn ) {
                loggedInUser = user;
            }
        });

        return loggedInUser;
    }
};

AddForm = connect(
    mapStateToProps
)( AddForm );

export default AddForm;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../actions';

class UserContainer extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        let userNode;
        return (
            <div className="user" ref={ ( node ) => { userNode = node } }>
                <img
                    src={this.props.state.users[this.props.currentUser].gravatar}
                    className="user__gravatar"
                    onClick={ ( e ) => {
                        userNode.classList.toggle( 'settings--visible' );
                    }}
                />
                <div className="user__settings">
                    <div className="user__settings__outer">
                        <div className="user__settings__inner">
                            Logged in as:
                            <span className="user__email">{this.props.currentUser}</span>
                            <button className="user__logout"
                                onClick={ () => {
                                    this.props.dispatch( logOutUser( this.props.currentUser ) );
                                }}>
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className="user__settings__screen"
                    onClick={ () => {
                        userNode.classList.remove( 'settings--visible' );
                    }}
                ></div>
            </div>
        );
    }
};

// Listen for updates:
UserContainer = connect( ( state ) => { return { state: state  } } )( UserContainer );

export default UserContainer;

import React, { PropTypes } from 'react';

const User = ( { currentUser, actions } ) => {
    let userNode;

    return (
        <div className="user" ref={ ( node ) => { userNode = node } }>
            <img
                src={currentUser.gravatar}
                className="user__gravatar"
                onClick={ ( e ) => {
                    userNode.classList.toggle( 'settings--visible' );
                }}
            />
            <div className="user__settings">
                <div className="user__settings__outer">
                    <div className="user__settings__inner">
                        Logged in as:
                        <span className="user__email">{currentUser.user}</span>
                        <button className="user__logout"
                            onClick={ () => {
                                actions.logOutUser( currentUser.user );
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
};

User.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default User;

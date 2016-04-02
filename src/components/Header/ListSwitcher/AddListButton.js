import React, { PropTypes } from 'react';

const AddListButton = ( { currentUser, actions } ) => {
    return (
        <button
            className="listSwitcher__button plain"
            onClick={ () => {
                actions.setCurrentListForUser( currentUser, actions.createList( currentUser )._id );
            }}
        >
            <span className="listSwitcher__button__inner">+</span>
        </button>
    );
};

AddListButton.propTypes = {
    currentUser: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export default AddListButton;

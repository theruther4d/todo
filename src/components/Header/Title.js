import React, { PropTypes } from 'react';

const Title = ( { currentTitle, currentList, actions } ) => {
    let input;

    return (
        <input className="navbar__title plain" defaultValue={currentTitle} onBlur={ ( e ) => {
            e.preventDefault();

            actions.setListTitle( currentList, e.target.value );
        }} />
    );
};

Title.propTypes = {
    currentTitle: PropTypes.string.isRequired,
    currentList: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export default Title;

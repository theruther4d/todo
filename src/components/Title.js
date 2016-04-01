import React, { PropTypes } from 'react';

const Title = ( { title, actions } ) => {
    let input;

    return (
        <input className="navbar__title plain" defaultValue={title} onBlur={ ( e ) => {
            e.preventDefault();

            actions.setListTitle( e.target.value );
        }} />
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export default Title;

import React, { PropTypes } from 'react';
import User from '../components/Header/User';
import Title from '../components/Header/Title';
import EditButton from '../components/Header/EditButton';
import AddForm from '../components/Header/AddForm';

const Header = ( { currentUser, title, hasTodos, isEditing, actions } ) => {

    return (
        <nav className="navbar">
            <div className="navbar__bar">
                <User currentUser={currentUser} actions={actions} />
                <Title title={title} actions={actions} />
                <EditButton enabled={hasTodos} editing={isEditing} actions={actions} />
            </div>
            <AddForm currentUser={currentUser.user} actions={actions} />
        </nav>
    );
};

Header.propTypes = {
    currentUser: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hasTodos: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

export default Header;

import React, { PropTypes } from 'react';
import User from '../components/Header/User';
import Title from '../components/Header/Title';
import EditButton from '../components/Header/EditButton';
import AddForm from '../components/Header/AddForm';
import ListSwitcher from '../components/Header/ListSwitcher/ListSwitcher';

const Header = ( { currentUser, title, hasTodos, isEditing, listEditingState,  currentList, lists, listTodos, actions } ) => {
    return (
        <nav className="navbar">
            <div className="navbar__bar">
                <User
                    currentUser={currentUser}
                    actions={actions}
                />
                <Title
                    key={title}
                    currentTitle={title}
                    actions={actions}
                    currentList={currentList}
                />
                <ListSwitcher
                    currentUser={currentUser.user}
                    lists={lists}
                    actions={actions}
                    listTodos={listTodos}
                    currentList={currentList}
                    listEditingState={listEditingState}
                />
                <EditButton
                    enabled={hasTodos}
                    editing={isEditing}
                    actions={actions}
                    onClick={ ( e ) => {
                        e.preventDefault();

                        actions.setEditingState( !isEditing );
                }}/>
            </div>
            <AddForm
                currentUser={currentUser.user}
                currentList={currentList}
                actions={actions}
            />
        </nav>
    );
};

Header.propTypes = {
    currentUser: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    hasTodos: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    listEditingState: PropTypes.bool.isRequired,
    currentList: PropTypes.string.isRequired,
    lists: PropTypes.object.isRequired,
    listTodos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default Header;

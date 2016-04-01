import React, { PropTypes } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ListContainer from '../containers/ListContainer';
import TabListContainer from '../containers/TabListContainer';
import UserContainer from '../containers/UserContainer';
import NavBarContainer from '../containers/NavBarContainer';
import LoginForm from './LoginForm';
import AddForm from './AddForm';

const App = ( { currentUser, editingState, hasTodos } ) => {
    const editingClass = editingState ? 'editing' : '';
    return currentUser ? (
        <main className={editingClass}>
            <NavBarContainer currentUser={currentUser} editingState={editingState} hasTodos={hasTodos} />
            <ListContainer editingState={editingState} />
            <TabListContainer editingState={editingState} />
        </main>
    ) : (
        <main>
            <LoginForm />
        </main>
    );
};

App.propTypes = {
    currentUser: PropTypes.string,
    editingState: PropTypes.bool.isRequired,
    hasTodos: PropTypes.number.isRequired
};

export default App;

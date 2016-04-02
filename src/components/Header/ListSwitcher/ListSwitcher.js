import React, { PropTypes } from 'react';
import AddListButton from './AddListButton';
import ListsList from './ListsList';

const ListSwitcher = ( { currentUser, lists, actions } ) => {

    return (
        <div className="listSwitcher">
            <AddListButton
                actions={actions}
                currentUser={currentUser}
            />
            <button
                className="listSwitcher__dropdown plain"
                onClick={ ( e ) => {
                    e.target.classList.toggle( 'visible' );
                }}></button>
            <ListsList
                currentUser={currentUser}
                lists={lists}
                actions={actions}
            />
        </div>
    );
};

ListSwitcher.propTypes = {
    currentUser: PropTypes.string.isRequired,
    lists: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ListSwitcher;

import React, { PropTypes } from 'react';
import AddListButton from './AddListButton';
import ListsList from './ListsList';
import EditButton from '../EditButton';

const ListSwitcher = ( { currentUser, currentList, lists, listTodos, listEditingState, actions } ) => {
    const itemClass = `listSwitcher ${listEditingState ? 'is--editing' : ''}`;

    return (
        <div className={itemClass}>
            <div className="listSwitcher__header">
                <AddListButton
                    actions={actions}
                    currentUser={currentUser}
                />
                <button
                    className="listSwitcher__dropdown plain"
                    onClick={ ( e ) => {
                        e.target.parentNode.classList.toggle( 'visible' );
                    }}></button>
                <EditButton
                    enabled={Object.keys( lists ).length > 0}
                    editing={listEditingState}
                    actions={actions}
                    onClick={ () => {
                        actions.setListEditing( !listEditingState );
                    }}
                />
            </div>
            <ListsList
                currentUser={currentUser}
                lists={lists}
                actions={actions}
                listTodos={listTodos}
                currentList={currentList}
                listEditingState={listEditingState}
            />
        </div>
    );
};

ListSwitcher.propTypes = {
    currentUser: PropTypes.string.isRequired,
    currentList: PropTypes.string.isRequired,
    lists: PropTypes.object.isRequired,
    listTodos: PropTypes.object.isRequired,
    listEditingState: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

export default ListSwitcher;

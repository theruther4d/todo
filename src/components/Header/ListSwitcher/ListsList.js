import React, { PropTypes } from 'react';
import ListSwitcherItem from './ListSwitcherItem';

const ListsList = ( { currentUser, currentList, lists, listTodos, listEditingState, actions } ) => {
    return (
        <div className="listSwitcher__list">
            <div className="listSwitcher__list__outer">
                <ul className="listSwitcher__list__inner">
                {Object.keys( lists ).map( ( list ) => {
                    const title = lists[list].name;
                    const count = listTodos.hasOwnProperty( list ) ? Object.keys( listTodos[list] ).length : 0;
                    const itemClass = `listSwitcher__list__item ${currentList === list ? 'selected' : ''}`;

                    return(
                        <ListSwitcherItem
                            key={list}
                            list={list}
                            title={title}
                            currentUser={currentUser}
                            count={count}
                            actions={actions}
                            isEditing={listEditingState}
                            className={itemClass}
                            lists={lists}
                        />
                    );
                })}
                </ul>
            </div>
        </div>
    );
};

ListsList.propTypes = {
    currentUser: PropTypes.string.isRequired,
    currentList: PropTypes.string.isRequired,
    lists: PropTypes.object.isRequired,
    listTodos: PropTypes.object.isRequired,
    listEditingState: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

export default ListsList;

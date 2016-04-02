import React, { PropTypes } from 'react';

const ListsList = ( { currentUser, lists, actions } ) => {
    return (
        <div className="listSwitcher__list">
            <div className="listSwitcher__list__outer">
                <ul className="listSwitcher__list__inner">
                {Object.keys( lists ).map( ( list ) => {
                    const title = lists[list].name;

                    return(
                        <li
                            key={list}
                            className="listSwitcher__list__item"
                            onClick={ () => {
                                actions.setCurrentListForUser( currentUser, list );
                            }}
                        >
                            {title}
                        </li>
                    );
                })}
                </ul>
            </div>
        </div>
    );
};

ListsList.propTypes = {
    currentUser: PropTypes.string.isRequired,
    lists: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default ListsList;

import React, { PropTypes } from 'react';
import Counter from '../../Footer/Counter';
import Checkbox from '../../Body/Checkbox';
import DeleteButton from '../../Body/DeleteButton';

const ListSwitcherItem = ( { list, title, currentUser, count, className, actions, isEditing, lists } ) => {
    let item;

    return (
        <li
            key={list}
            className={className}
            onClick={ () => {
                if( isEditing ) {
                    return;
                }
                actions.setCurrentListForUser( currentUser, list );
            }}
            ref={ ( node ) => { item = node } }
        >
            <div className="listSwitcher__list__item__inner">
                <Checkbox
                    completed={false}
                    isEditing={true}
                    onClick={ ( e ) => {
                        item.classList.toggle( 'will-delete' );
                    }}
                />
                <div className="listSwitcher__list__item__text">
                    <div className="listSwitcher__list__item__text__inner">
                        {title}
                        <Counter
                            count={count}
                        />
                    </div>
                </div>
                <DeleteButton
                    onClick={ () =>{
                        let nextList = false;                        actions.deleteList( list );
                        actions.setListEditing( false );

                        Object.keys( lists ).map( ( item ) => {
                            if( item !== list ) {
                                nextList = item;
                            }
                        });

                        if( !nextList ) {
                            actions.setCurrentListForUser( currentUser, actions.createList( currentUser, 'Untitled' )._id );
                        } else {
                            actions.setCurrentListForUser( currentUser, nextList );
                        }
                    }}
                />
            </div>
        </li>
    );
};

ListSwitcherItem.propTypes = {
    list: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentUser: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    isEditing: PropTypes.bool.isRequired,
    lists: PropTypes.object.isRequired
};

export default ListSwitcherItem;

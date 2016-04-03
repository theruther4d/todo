import React, { PropTypes } from 'react';
import Checkbox from './Checkbox';
import Text from './Text';
import DeleteButton from './DeleteButton';

const Item = ( { _id, text, completed, isEditing, actions } ) => {
    let item;
    const itemClass = `todo__item ${completed ? 'complete' : 'incomplete'} ${isEditing ? 'editing' : ''}`;

    return (
        <li className={itemClass} ref={ ( node ) => { item = node } }>
            <div className="todo__item__inner">
                <Checkbox
                    completed={completed}
                    isEditing={isEditing}
                    onClick={ () => {
                        if( isEditing ) {
                            item.classList.toggle( 'will-delete' );
                        } else {
                            actions.toggleTodo( _id );
                        }
                    }}
                />
                <Text
                    _id={_id}
                    text={text}
                    actions={actions}
                />
            </div>
            <DeleteButton
                onClick={ () =>{
                    actions.deleteTodo( _id );
                }}
            />
        </li>
    );
};

Item.proptypes = {
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

export default Item;

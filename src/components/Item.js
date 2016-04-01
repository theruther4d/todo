import React, { PropTypes } from 'react';
import CheckIcon from './CheckIcon';

const Item = ( { _id, onClick, editClick, deleteClick, submit, completed, text, editingState } ) => {
    let currentItem, itemText;
    const completionClass = completed ? 'complete' : 'incomplete';
    const editingClass = editingState ? 'editing' : '';
    const itemClass = `todo__item ${completionClass} ${editingClass}`;

    return editingState ? (
        <li className={itemClass} ref={ ( node ) => { currentItem = node } }>
            <div className="todo__item__inner">
                <div className="todo__item__check" onClick={ ( e ) => {
                    e.preventDefault();
                    editClick( currentItem );
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                    	<path d="M22,0C9.8,0,0,9.8,0,22c0,12.2,9.8,22,22,22c12.1,0,22-9.8,22-22C44,9.8,34.2,0,22,0z M36.2,24.6H7.8v-5.2 h28.4V24.6z"/>
                    </svg>
                </div>
                <input
                    type="text"
                    className="todo__item__text plain"
                    defaultValue={text} ref={ ( node ) => { itemText = node } }
                    onBlur={ ( e ) => {
                        e.preventDefault();

                        if( !itemText.value.trim() ) {
                            return;
                        }

                        submit( _id, itemText.value );
                    }}
                />
            </div>
            <div className="todo__item__delete" onClick={ () => {
                deleteClick( _id );
            }}>
                <span className="todo__item__delete__text">Delete</span>
            </div>
            <div className="todo__item__screen" onClick={ () => {
                currentItem.classList.remove( 'will-delete' );
            }}></div>
        </li>
    ) : (
        <li className={itemClass}>
            <div className="todo__item__inner">
                <div className="todo__item__check" onClick={onClick}>
                    <CheckIcon />
                </div>
                <input
                    type="text"
                    className="todo__item__text plain"
                    defaultValue={text} ref={ ( node ) => { itemText = node } }
                    onBlur={ ( e ) => {
                        e.preventDefault();

                        if( !itemText.value.trim() ) {
                            return;
                        }

                        submit( _id, itemText.value );
                    }}
                />
            </div>
        </li>
    );
};

Item.proptypes = {
    onClick: PropTypes.func.isRequired,
    editClick: PropTypes.func.isRequired,
    deleteClick: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Item;

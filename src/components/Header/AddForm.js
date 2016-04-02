import React, { PropTypes } from 'react';

const AddForm = ( { currentUser, currentList, actions } ) => {
    let input;

    return (
        <form
            className="addTodo"
            onSubmit={ ( e ) => {
                e.preventDefault();
                const text = input.value;

                if( !text.trim() ) {
                    return;
                }

                actions.addTodo( text, currentUser, currentList );
                input.value = '';
        }}>
            <input type="text" ref={ ( node ) => { input = node } } placeholder="add todo" />
            <input type="submit" value="add" />
        </form>
    );
};

AddForm.propTypes = {
    currentUser: PropTypes.string.isRequired,
    currentList: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
};

export default AddForm;

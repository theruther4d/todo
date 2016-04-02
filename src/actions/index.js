/**
 * Generates a UUID.
 * Borrowed from http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/#answer-2117523
 */
const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function( c ) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r&0x3 | 0x8 );
        return v.toString( 16 );
    });
};


/**
 * Action creator for adding a new todo:
 */
export const addTodo = ( text, user ) => {
    return {
        type: 'ADD',
        _id: generateUUID(),
        text: text,
        author: user
    };
};

/**
 * Action creator for toggling completion state of todo:
 */
export const toggleTodo = ( _id ) => {
    return {
        type: 'TOGGLE',
        _id: _id
    };
};

/**
 * Action creator for editing the text of a todo.
 */
export const editTodo = ( _id, text ) => {
    return {
        type: 'EDIT',
        _id: _id,
        text: text
    };
};

/**
 * Action creator for deleting a todo.
 */
export const deleteTodo = ( _id ) => {
    return {
        type: 'DELETE',
        _id: _id
    };
};

/**
 * Action creator for logging in a user.
 */
export const validateUser = ( email, password ) => {
    return {
        type: 'VALIDATE_USER',
        email: email,
        password: password,
        _id: generateUUID()
    };
};

/**
 * Action creator for logging out a user.
 */
export const logOutUser = ( email ) => {
    return {
        type:'LOG_OUT',
        email: email
    };
};

/**
 * Action creator for changing the current view.
 */
export const changeView = ( view ) => {
    return {
        type: 'SET_VIEW',
        view: view
    };
};

/**
 * Action creator for changing the title of a list.
 */
export const setListTitle = ( title ) => {
    return {
        type: 'SET_TITLE',
        title: title
    };
};

/**
 * Action creator for changing the editing state.
 */
export const setEditingState = ( editingState ) => {
    return {
        type: 'SET_EDITING_STATE',
        editingState: editingState
    };
};

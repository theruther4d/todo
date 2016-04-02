import { generateUUID } from '../helpers/UUID';

/**
 * Action creator for adding a new todo:
 */
export const addTodo = ( text, user, list ) => {
    return {
        type: 'ADD',
        _id: generateUUID(),
        text: text,
        author: user,
        list: list
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
 * Action creator for changing the editing state.
 */
export const setEditingState = ( editingState ) => {
    return {
        type: 'SET_EDITING_STATE',
        editingState: editingState
    };
};

/**
 * Action creator for creating a list for a user.
 */
export const createList = ( author, name = 'Untitled' ) => {
    return {
        type: 'CREATE_LIST',
        _id: generateUUID(),
        author: author,
        name: name
    }
};

/**
 * Action creator for setting the user's current list.
 */
export const setCurrentListForUser = ( user, list ) => {
    return {
        type: 'SET_CURRENT_LIST',
        user: user,
        list: list
    }
};

/**
 * Action creator for changing the title of a list.
 */
export const setListTitle = ( list, title ) => {
    return {
        type: 'SET_TITLE',
        list: list,
        title: title
    };
};

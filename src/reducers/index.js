import { addTodo } from '../actions';
import md5 from 'md5';


export const lists = ( state = {}, action ) => {
    switch( action.type ) {
        case 'CREATE_LIST':
            return {
                ...state,
                [action._id]: {
                    author: action.author,
                    name: action.name
                }
            };

        case 'SET_TITLE':
            return {
                ...state,
                [action.list]: {
                    ...state[action.list],
                    name: action.title
                }
            };

        case 'DELETE_LIST':
            let newState = { ...state };
            delete newState[action._id];
            return newState;

        default:
            return state;
    }
}

export const todos = ( state = {}, action ) => {
    switch( action.type ) {
        case 'ADD':
            return {
                ...state,
                [action._id]: {
                    author: action.author,
                    list: action.list,
                    text: action.text,
                    completed: false
                }
            };

        case 'TOGGLE':
            return {
                ...state,
                [action._id]: {
                    ...state[action._id],
                    completed: !state[action._id].completed
                }
            };

        case 'EDIT':
            return {
                ...state,
                [action._id]: {
                    ...state[action._id],
                    text: action.text
                }
            };

        case 'DELETE':
            let newState = { ...state };
            delete newState[action._id];
            return newState;

        default:
            return state;
    }
};

export const users = ( state = {}, action ) => {
    switch( action.type ) {
        case 'VALIDATE_USER':
            // If we are missing anything:
            if( !action.email || !action.password ) {
                alert( 'You must provide a valid email and password' );
            }

            // If the user already exists:
            if( state && state.hasOwnProperty( action.email ) ) {
                // If they provided the correct password:
                if( state[action.email].password === action.password ) {
                    return {
                        ...state,
                        [action.email]: {
                            ...state[action.email],
                            loggedIn: true,
                        }
                    };
                }

                // Right username, wrong password:
                else {
                    alert( 'wrong password :/' );
                    return state;
                }
            }

            // If not, create a new user:
            else {
                const hashed = md5( action.email );
                const url = `http://www.gravatar.com/avatar/${hashed}?d=retro`;
                return {
                    ...state,
                    [action.email]: {
                        gravatar: url,
                        password: action.password,
                        loggedIn: true
                    }
                };
            }

        case 'LOG_OUT':
            if( !state.hasOwnProperty( action.email ) ) {
                return state;
            }

            return {
                ...state,
                [action.email]: {
                    ...state[action.email],
                    loggedIn: false
                }
            };

        case 'SET_CURRENT_LIST':
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    currentList: action.list
                }
            }

        default:
            return state;
    }
};

export const view = ( state = 'ALL', action ) => {
    if( action && action.view ) {
        return action.view;
    } else {
        return state;
    }
};

export const editing = ( state = false, action ) => {
    return typeof action.editingState === 'undefined' ? state : action.editingState;
};

export const listEditing = ( state = false, action ) => {
    switch( action.type ) {
        case 'SET_LIST_EDITING_STATE':
            return action.listEditingState;

        default:
            return state;
    };
};

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import UserContainer from './UserContainer';
import AddForm from '../components/AddForm';
import { setListTitle, setEditingState } from '../actions';

class NavBarContainer extends Component {
    constructor( props ) {
        super( props );
        this._editing = this.props.editingState;
    }

    render() {
        let input;
        const editButtonClass = `edit plain ${this.props.hasTodos ? '' : 'disabled'}`;
        const editButtonText = this.props.editingState ? 'Done' : 'Edit';

        return (
            <nav className="navbar">
                <div className="navbar__bar">
                    <UserContainer currentUser={this.props.currentUser} />
                    <form className="navbar__title__form" onSubmit={ ( e ) => {
                        e.preventDefault();

                        e.target.blur();
                        this.props.dispatch( setListTitle( input.value ) );
                    }}>
                        <input className="navbar__title plain" defaultValue={this.props.state.title} ref={ ( node ) => { input = node } } />
                    </form>
                    <button className={editButtonClass} onClick={ ( e ) => {
                        e.preventDefault();

                        this._editing = !this._editing;

                        this.props.dispatch( setEditingState( this._editing ) );
                    }}>
                        {editButtonText}
                    </button>
                </div>
                <AddForm />
            </nav>
        );
    }
};

// Listen for updates:
NavBarContainer = connect( ( state ) => { return { state: state  } } )( NavBarContainer );

export default NavBarContainer;

import React, { PropTypes } from 'react';

const EditButton = ( { enabled, editing, actions } ) => {
    const buttonClass = `edit plain ${enabled ? '' : 'disabled'}`;
    const buttonText = editing ? 'Done' : 'Edit';

    return (
        <button className={buttonClass} onClick={ ( e ) => {
            e.preventDefault();

            actions.setEditingState( !editing );
        }}>
            {buttonText}
        </button>
    );
};

EditButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

export default EditButton;

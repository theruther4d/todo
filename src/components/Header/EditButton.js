import React, { PropTypes } from 'react';

const EditButton = ( { enabled, editing, defaultText, editingText, onClick } ) => {
    const buttonClass = `edit plain ${enabled ? '' : 'disabled'}`;
    const buttonText = editing ? ( editingText || 'Done' ) : 'Edit';

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

EditButton.propTypes = {
    enabled: PropTypes.bool.isRequired,
    editingText: PropTypes.string,
    editing: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default EditButton;

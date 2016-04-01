import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
    }
};

// Listen for updates:
Header = connect( ( state ) => { return { state: state  } } )( Header );

export default Header;

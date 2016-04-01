import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateUser } from '../actions';

let LoginForm = ( { dispatch } ) => {
    let email, password;

    return (
        <form className="login-form" onSubmit={ ( e ) => {
            e.preventDefault();

            if( !email.value.trim() || !password.value.trim() ) {
                return;
            }

            dispatch( validateUser( email.value, password.value ) );
            email.value = '';
            password.value = '';
        }}>
            <h1 className="login-form__title">Log in or Sign up</h1>
            <div className="login-form__fields">
                <input type="email" placeholder="email" ref={ ( emailNode ) => { email = emailNode } } required />
                <input type="password" placeholder="password"  ref={ ( passwordNode ) => { password = passwordNode } } required />
            </div>
            <input type="submit" value="Let's Go!" />
        </form>
    );
};

LoginForm = connect()( LoginForm );

export default LoginForm;

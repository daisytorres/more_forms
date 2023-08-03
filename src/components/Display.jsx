import React, {useState} from 'react';

const Display = (props) => {
    const {firstName, lastName, email, password, confirmPassword} = props

    return (
        <div className = "display-form">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p type="password">Password: {password}</p>
            <p type="password">Confirm Password: {confirmPassword}</p>


        </div>
    );
    }




export default Display;
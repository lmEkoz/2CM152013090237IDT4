import React, { Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Form from '../Forms/Form';

const Login = () => {
    const [isValidUser , validateUser] = useState(false);
    return (
        <Fragment>
                {isValidUser ? <Navigate to='/home' user={user} replace/> : <Form isUser={validateUser}/> }
        </Fragment>
    );
}

export default Login;
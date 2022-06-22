import React, { Fragment, useState } from 'react';
import Navigate from 'react-dom';
import Form from '';

const Login = () => {
    const [isValidUser , validateUser] = useState(false);
    return (
        <Fragment>
                {isValidUser ? <Navigate to='/home' user={user} replace/> : <Form isUser={validateUser}/> }
        </Fragment>
    );
}

export default Login;
import React, { Fragment } from "react";
import sendData from "../../services/sendData";
import '../../styles/form.css';

const Form = ({isUser}) => {
    
    const handleSubmit = (event) => {  
        event.preventDefault();
       /* const info = {
            user: event.target.user.value,
            password: event.target.password.value
        };
        
        sendData('validateUser', info )
        .then(({message}) => {
            if(message === 'success') isUser(true)
            if(message === 'warning') alert('Usuario o contraseña incorrectos');
            return false;
        })
        .catch(err => {
            alert(`Error: { ${err} }`);
            isUser(false);
        })*/
        isUser(true);
    };

    return (
        <Fragment className="signin-form">
            <form onSubmit={handleSubmit}>
            <h1>  Sign In </h1>
            <input placeholder="Ingrese el usuario" type="text" id="user"  required/> <br/>
            <input placeholder="Ingrese la contraseña" type="password" id="password"  required/> <br/>
            <input type="submit" value="Submit" />
            </form>
        </Fragment>
    );
}

export default Form;
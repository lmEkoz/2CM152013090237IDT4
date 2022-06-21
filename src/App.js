import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


const App = () => {
    return(
        <Routes>
            <Route index element={ <Login/> } />
            <Route path='/home' element={ <Home />}/>
            <Route path='/index.html' element={<Navigate to='/2CM152013090237IDT4/' replace/>} />
            <Route path='/*' element={<h1>Resource not found!</h1>} />
            
            {
                /*
                    UI
                    home -> question/view/all
                    question/
                        add/ -> Agrega la pregunta
                        view/all -> Muestra todas las preguntas
                        edit/:id -> Editan la pregunta 
                        delete/:id -> Elimina la pregunta con el id useParams()
                        test/:id -> Muestra la pregunta con el id useParams()

                    Back
                        validateUser (POST) = {user, password} -> 
                            valida si existe en DB { status: [error, warning success], message : {user, id}  | 'texto'} 
                        viewQuestion = {id : ID} -> { status: [error, warning success], message : { question : {} } | 'texto'}  o
                            {all : true} -> { 
                                status: [error, warning success], 
                                message : 'texto' | {quesitions : [{ question : {} } ,  **** ,{ question : {} }] }
                            }
                        addQuestion = {question : {}} -> {status: [error, warning success], message :  'texto '} 
                        deleteQuestion = {id : ID } -> {status: [error, warning success], message :  'texto '}
                        editQuestion = {id : ID, question: {}} -> { status: [error, warning success], message : { question : {} } | 'texto'}
                        
                        
                        

                */
            /* <Route path='/2CM152013090237IDT4/'   element={ <Login/> } />
            <Route path='/2CM152013090237IDT4/home' element={ <Home />}/>
            <Route path='/2CM152013090237IDT4/index.html' element={<Navigate to='/2CM152013090237IDT4/' replace/>} />
            <Route path='/2CM152013090237IDT4/*' element={<h1>Resource not found!</h1>} /> */
            }
        </Routes>
    );
}

export default App;

// /2CM152013090237IDT4/ 

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';


const App = () => {
    return(
        <Routes>
            <Route index element={ <Home/> } />
            
            {/** Login routes*/}
            {/* <Route path='/login' element={<Login/>} /> */}
            
            {/**CRUD Routes*/}
            {/* <Route path='/home' element={<Home/>} />
            <Route path='question/view/:id' element={<div></div>} />
            <Route path='question/edit/:id' element={<div></div>}/>
            <Route path='question/delete/:id' element={<div></div>}/>
            <Route path='question/test/:id' element={<div></div>}/> */}
            
            {/** Redirections */}
            {/* <Route index element={ <Navigate to='/login' replace />} />
            <Route path='/question/view/all' element={<Navigate to='/home' replace/>} /> */}

            {/** Others */}
            {/* <Route path='/*' element={<h1>Resource not found!</h1>} /> */}
            {
                /*
                    UI
                    home -> question/view/all
                    question/
                        view/all -> Muestra todas las preguntas
                        add/ -> Agrega la pregunta

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
            }
        </Routes>
    );
}

export default App;

// /2CM152013090237IDPF/ 

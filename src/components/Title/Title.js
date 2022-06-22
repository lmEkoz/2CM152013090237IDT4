import React from 'react';
import '../../styles/Title.css';

const Title =  ({text}) => {
    return (
        <div >
           <h1 className='title-label' > {text} </h1>
        </div>
    );  
}

export default Title;
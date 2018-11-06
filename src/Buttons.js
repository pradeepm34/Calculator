import React from 'react';
import './App.css';


const Buttons = (props)=>{
    return(
    <div className="Buttons">{props.children}</div>   
    );
};

export default Buttons;
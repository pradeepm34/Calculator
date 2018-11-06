import React from 'react';

const Button = (props)=>{
return(
    <div>
    <button  
    onClick = {props.onClick}
    data-value = {props.value}
    data-size = {props.size}
    className = "Button"
    >
    {props.label}
    </button>
    </div>
    
);
};

export default Button;
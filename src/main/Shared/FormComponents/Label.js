import React from 'react';
const Label = ({ htmlFor, className, value }) =>{
    return(
        <label
            htmlFor={htmlFor}
            className={`label${className ? ' ' + className : ''}`}
        >{value}</label>
    );
}
export default Label;
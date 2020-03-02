import React from 'react';
const TextBox = ({ id, className, name, value, handleChange, disabled, maxlength, placeholder}) =>{
    return(
        <input
            type="text"
            className={`form-control${className ? ' ' + className : ''}`}
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            maxLength={maxlength}
            placeholder={placeholder}
        />
    );
}
export default TextBox;
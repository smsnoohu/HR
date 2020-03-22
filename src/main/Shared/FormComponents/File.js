import React from 'react';
const File = ({ id, className, name, value, handleChange, disabled, maxlength, placeholder}) =>{
    return(
        <input
            type="file"
            className={`form-control${className ? ' ' + className : ''}`}
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            maxLength={maxlength}
            placeholder={placeholder}
            autoComplete="nope"
        />
    );
}
export default File;
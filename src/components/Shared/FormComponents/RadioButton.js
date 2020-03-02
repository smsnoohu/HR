import React from 'react';
const RadioButton = ({ id, className, name, value, handleChange, disabled, checked}) =>{
    return(
        <div className="radio">
            <input
                type="radio"
                className={className ? ' ' + className : ''}
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                checked={checked}
            />
            <label htmlFor={id}>{value}</label>
        </div>
    );
}
export default RadioButton;
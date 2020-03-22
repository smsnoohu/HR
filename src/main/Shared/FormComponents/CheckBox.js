import React from 'react';
const CheckBox = ({ id, className, name, value, handleChange, disabled, checked, label}) =>{
    return(
        <div className="check">
            <input
                type="checkbox"
                className={className ? ' ' + className : ''}
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                checked={checked || ''}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
export default CheckBox;
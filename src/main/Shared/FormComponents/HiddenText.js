import React, { useState } from 'react';
const HiddenText = ({ id, className, name, value, handleChange, disabled, maxlength, placeholder }) =>{

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
    return(
        <div className="input-group">
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
            <button className={`btn btn-dark fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePassword} disabled={disabled}>
                <span class="sr-only">${showPassword ? 'Hide hidden text' : 'Show hidden text'}</span>
            </button>
        </div>
    );
}
export default HiddenText;
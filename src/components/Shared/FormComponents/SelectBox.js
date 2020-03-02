import React from 'react';
const SelectBox = ({ id, className, name, value, handleChange, disabled, placeholder, options}) =>{
    
    const optionsArray = (options && options.length !== 0) ? options : [];

    return(
        <select
            className={`form-control${className ? ' ' + className : ''}`}
            name={name}
            id={id}
            onChange={handleChange}
            disabled={disabled}
            value={value}
        >
            {optionsArray !== [] && (
                <>
                    {placeholder && <option value="">-- {placeholder} --</option>}
                    {!placeholder && <option value="">-- Select --</option>}
                    {optionsArray.map(opt => {
                        return(
                            <option label={opt.desc} key={opt.id} value={opt.id} name={opt.desc}>
                                {opt.desc}
                            </option>
                        )
                    })}
                </>
            )}
        </select>
    );
}
export default SelectBox;
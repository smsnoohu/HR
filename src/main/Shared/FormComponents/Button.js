import React from 'react';

const Button = ({ type, id, className, name, value, handleClick, disabled, target, iconPlace, icon, isIconOnly }) => {
    return(
        <button
            type={type ? type : 'button'}
            className={`btn${className ? ' btn-' + className : ''}${isIconOnly && icon ? ' fa fa-' + icon : ''}`}
            name={name}
            id={id}
            onClick={handleClick}
            data-target={target}
            disabled={disabled}
            aria-label={value}
            title={value}
        >
            {icon && iconPlace === 'prefix' && <em className={`fa fa-${icon} icon-prefix`}></em>}
            {!isIconOnly && value}
            {!isIconOnly && icon && iconPlace !== 'prefix' && <em className={`fa fa-${icon} icon-sufix`}></em>}
        </button>
    );
}

export default Button;
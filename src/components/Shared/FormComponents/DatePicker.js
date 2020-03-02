import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Datepicker = ({ className, name, id, value, isClear, inline, maxDate, handleChange }) => {
    const [pickDate, setPickDate] = useState(null);
    const setDate = date => setPickDate(date);
    return(
        <DatePicker
            className={`form-control${className ? ' ' + className : inline ? ' ' + 'date-picker-inline' : ''}`}
            name={name}
            id={id}
            value={value}
            selected={pickDate}
            onChange={(date)=>{setDate(date);handleChange(date);}}
            isClearable
            maxDate={maxDate}
        />
    );
}

export default Datepicker;
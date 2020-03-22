import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';
const Datepicker = ({ className, name, id, value, inline, maxDate, handleChange, selectsStart, startDate, endDate, minDate, disabled }) => {
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
            selectsStart
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            disabled={disabled}
        />
    );
}

export default Datepicker;
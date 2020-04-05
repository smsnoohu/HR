import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';
const Datepicker = ({ className, name, id, value, inline, maxDate, handleChange, selected, format, startDate, endDate, minDate, disabled, showMonthYearPicker }) => {
    const [pickDate, setPickDate] = useState(null);
    const setDate = date => setPickDate(date);
    return(
        <DatePicker
            className={`form-control${className ? ' ' + className : inline ? ' ' + 'date-picker-inline' : ''}`}
            name={name}
            id={id}
            value={(date)=>{setDate(date)}}
            selected={pickDate}
            dateFormat={format}
            onChange={(date)=>{setDate(date);handleChange(date);}}
            isClearable
            selectsStart
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            disabled={disabled}
            showMonthYearPicker={showMonthYearPicker}
            autoComplete="off"
        />
    );
}

export default Datepicker;
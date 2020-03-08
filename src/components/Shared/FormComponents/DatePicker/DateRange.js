import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';
const DateRange = ({ className, name, id, value, inline, maxDate, handleChange }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return(
        <>
            <DatePicker
                className={`form-control${className ? ' ' + className : inline ? ' ' + 'date-picker-inline' : ''}`}
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                className={`form-control${className ? ' ' + className : inline ? ' ' + 'date-picker-inline' : ''}`}
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </>
    );
}

export default DateRange;
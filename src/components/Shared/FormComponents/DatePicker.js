import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Datepicker = props => {
  const {
    className,
    name,
    id,
    value,
    selected,
    isClear,
    inline,
    maxDate,
    handleChange,
    handleSelect,
    dateFormat,
  } = props;

  // commented it out, as we can use the state in each compoenent
  // const [pickDate, setPickDate] = useState(null);
  // const setDate = date => setPickDate(date);
  return (
    <DatePicker
      className={`form-control${
        className ? ' ' + className : inline ? ' ' + 'date-picker-inline' : ''
      }`}
      name={name}
      id={id}
      value={value}
      selected={selected}
      onChange={handleChange}
      onSelect={handleSelect}
      isClearable
      maxDate={maxDate}
      dateFormat={dateFormat}
    />
  );
};

export default Datepicker;

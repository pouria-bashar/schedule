import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DatePicker.css';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import NavBar from './NavBar';

class DatePicker extends Component {

  _renderDay(day) {
    const date = day.getDate();
    return (
      <div className={styles.date}>{date}</div>
    );
  }

  render() {
    const { selectedDate, onDateSelect, name, onChange, value, format } = this.props;
    return (
      <DayPickerInput
        dayPickerProps={{ classNames: styles, navbarElement: NavBar }}
        classNames={styles}
        name={name}
        onDayChange={onChange}
        value={value}
        format={format}
      />
    );
  }
}
DatePicker.propTypes = {
  selectedDate: PropTypes.object.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
export default DatePicker;

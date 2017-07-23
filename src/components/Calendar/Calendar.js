import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Calendar.css';
import DayPicker from 'react-day-picker';

class Calendar extends Component {

  render() {
    return (
      <DayPicker classNames={styles} />
    );
  }
}
Calendar.propTypes = {

};
export default Calendar;

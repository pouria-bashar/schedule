import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Calendar.css';
import DayPicker from 'react-day-picker';
import NavBar from './NavBar';

class Calendar extends Component {

  _renderDay(day) {
    const date = day.getDate();
    return (
      <div className={styles.date}>{date}</div>
    );
  }

  render() {
    const { selectedDate, onDateSelect } = this.props;
    return (
      <DayPicker
        classNames={styles}
        navbarElement={NavBar}
        fixedWeeks
        selectedDays={selectedDate}
        month={selectedDate}
        renderDay={this._renderDay}
        firstDayOfWeek={1}
        onDayClick={onDateSelect}
      />
    );
  }
}
Calendar.propTypes = {
  selectedDate: PropTypes.object.isRequired,
};
export default Calendar;

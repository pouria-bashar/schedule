import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.css';
import { addToTime } from 'utils/dateUtils';

const Timeslot = ({ onTimeslotClick, time }) => (
  <div className={styles.timeslot}>
    <div onClick={() => onTimeslotClick(time)} />
    <div onClick={() => onTimeslotClick(addToTime(time, 30))} />
  </div>
);
Timeslot.propTypes = {
  onTimeslotClick: PropTypes.func,
  time: PropTypes.string,
};
export default Timeslot;

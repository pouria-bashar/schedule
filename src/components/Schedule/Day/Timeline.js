import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.css';
import { getDayHours, isSameDate } from 'utils/dateUtils';

const Timeline = ({ name }) => (
  <div className={styles.timeline}>
    {
      getDayHours().map(time => (
        <span key={time}>{time}</span>
      ))
    }
  </div>
);
Timeline.propTypes = {
  name: PropTypes.string,
};
export default Timeline;

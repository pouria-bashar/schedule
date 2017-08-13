import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timeline.css';

const TimeHeader = ({ time, style }) => (
  <div style={style} className={styles.timeHeader}>{time}</div>
);
TimeHeader.propTypes = {
  time: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
export default TimeHeader;

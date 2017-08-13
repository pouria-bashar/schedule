import React from 'react';
import PropTypes from 'prop-types';
import styles from './Timeline.css';

const Timeslot = ({ style }) => (
  <div style={style} className={styles.timeslot} />
);
Timeslot.propTypes = {
  style: PropTypes.object.isRequired,
};
export default Timeslot;

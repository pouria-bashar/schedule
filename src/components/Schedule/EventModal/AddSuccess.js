import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventModal.css';
import { Icon } from 'components';

const AddSuccess = ({ startDate, startTime, endTime, onClose }) => (
  <div className={styles.addSuccess}>
    <div>
      <h1>Event was successfully created</h1>
      <span></span>
    </div>
    <Icon name="check_circle" />
    <button onClick={onClose}>OK</button>
  </div>
);
AddSuccess.propTypes = {
  startDate: PropTypes.object.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default AddSuccess;

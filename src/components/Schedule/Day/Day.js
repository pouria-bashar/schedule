import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Day.css';
import { getDayHours } from 'utils/dateUtils';

class Day extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.grid}>
          {
            getDayHours().map(time => (
              <div className={styles.time} key={time}>
                <span>{time}</span>
                <div />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
Day.propTypes = {

};
export default Day;

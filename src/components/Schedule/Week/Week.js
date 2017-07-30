import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Week.css';
import { getDayHours } from 'utils/dateUtils';
import { WEEKDAYS } from 'constants';
class Week extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.weekdays}>
          <div />
          {
            WEEKDAYS.map(day => (
              <div>{day}</div>
            ))
          }
        </div>
        <div className={styles.grid}>
          {
            getDayHours().map(time => (
              <div className={styles.time} key={time}>
                <span>{time}</span>
                {
                  WEEKDAYS.map(day => (
                    <div className={styles.day} />
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
Week.propTypes = {

};
export default Week;

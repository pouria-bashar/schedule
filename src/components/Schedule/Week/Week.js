import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Week.css';
import { getDayHours } from 'utils/dateUtils';
import { WEEKDAYS } from 'appConstants';

class Week extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.weekdays}>
          <div />
          {
            WEEKDAYS.map(day => (
              <div key={day}>{day}</div>
            ))
          }
        </div>
        <div className={styles.grid}>
          {
            getDayHours().map(time => (
              <div key={time} className={styles.time} key={time}>
                <span>{time}</span>
                {
                  WEEKDAYS.map(day => (
                    <div key={day} className={styles.day} />
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

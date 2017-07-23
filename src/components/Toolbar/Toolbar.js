import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.css';
import classNames from 'classnames/bind';
import { Icon, Calendar } from '../index';
import moment from 'moment';


const cx = classNames.bind(styles);


class Toolbar extends Component {

  state = {
    showCalendar: false,
  }

  render() {
    const {
      className,
    } = this.props;

    const { showCalendar } = this.state;
    const containerClassName = cx({
      container: true,
      [className]: !!className,
    },
  );
    return (
      <div className={containerClassName}>
        <ul className={styles.date}>
          <li>
            <a>TODAY</a>
          </li>
          <li>
            <a><Icon name="keyboard_arrow_left" /></a>
            <a><Icon name="keyboard_arrow_right" /></a>
          </li>
          <li>
            <a><Icon name="event_note" /></a>
            <a>
              <div
                className={styles.calendarContainer}
                onClick={() => this.setState({ showCalendar: !showCalendar })}
              >
                <span>{moment().format('YYYY-DD-MM')}</span>
                <div className={styles.calendar}>
                  {showCalendar && <Calendar />}
                </div>
              </div>
            </a>
          </li>
        </ul>
        <ul className={styles.views}>
          <li>
            <a>Day</a>
          </li>
          <li>
            <a>Week</a>
          </li>
          <li>
            <a>Month</a>
          </li>
          <li>
            <a>Timeline</a>
          </li>
        </ul>
      </div>
    );
  }
}
Toolbar.propTypes = {
  className: PropTypes.string,
};
export default Toolbar;

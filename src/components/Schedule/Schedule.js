import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day/Day';
import Week from './Week/Week';
import Month from './Month/Month';
import styles from './Schedule.css';

const views = {
  day: <Day />,
  week: <Week />,
  month: <Month />
}
class Schedule extends Component {

  render() {
    const { view } = this.props;

    return (
      <div className={styles.container}>
        { views[view] }
      </div>
    );
  }
}
Schedule.propTypes = {
  view: PropTypes.oneOf([ 'day', 'week', 'month', 'timeline' ]),
};
Schedule.defaultProps = {
  view: 'day',
};
export default Schedule;

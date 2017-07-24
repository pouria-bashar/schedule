import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from 'actions';
import Day from './Day/Day';
import Week from './Week/Week';
import Month from './Month/Month';
import styles from './Schedule.css';

const views = {
  day: Day,
  week: Week,
  month: Month,
}
class Schedule extends Component {

  render() {
    const { view, selectedDate, addEvent, events } = this.props;
    const View = views[view];
    return (
      <div className={styles.container}>
        <View
          selectedDate={selectedDate}
          events={events}
          addEvent={addEvent}
        />
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

function mapStateToProps({ events }) {
  return { events: events.items };
}
export default connect(mapStateToProps, { addEvent })(Schedule);

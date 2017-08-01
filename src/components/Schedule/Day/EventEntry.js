import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { getTimeClassName } from '../util';

const EventEntry = ({ style, event }) => (
  <div
    className={cx(
      {
        eventEntry: true,
        [event.endTime]: true,
        [`${getTimeClassName(event.endTime)}`]: true,
      })}
    style={style}
    >
      <span>{`${event.startTime} - ${event.endTime}`}</span>
      <span>{event.title}</span>
  </div>
);
EventEntry.propTypes = {
  style: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
};
export default EventEntry;

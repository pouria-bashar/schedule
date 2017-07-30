import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Day.css';
import { addToTime } from 'utils/dateUtils';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);


class TimeSlot extends Component {

  render() {
    const { onTimeslotClick, time , onMouseDown, onMouseUp, registerChild, isSelected } = this.props;
    return (
      <div className={cx({ timeslot: true, isSelected })}
        onMouseDown={onMouseDown}
        ref={registerChild}
      />
    );
  }
}
TimeSlot.propTypes = {
  time: PropTypes.string,
};
export default TimeSlot;

import React, { Component } from 'react';
import styles from './Day.css';
import PropTypes from 'prop-types';
import { getDayHours, isSameDate } from 'utils/dateUtils';
import EventModal from '../EventModal/EventModal';
import { calculatePosition } from '../util';
import DayGrid from './DayGrid';
import Timeline from './Timeline';
import { getTimeClassName } from '../util';

const gridHeight = 60; //Pixels. 1 hour grid height

export default class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this._handleClose = this._handleClose.bind(this);
    this._openEventModal = this._openEventModal.bind(this);
  }


  _handleClose() {
    this.setState({ isOpen: false });
  }

  _openEventModal(startTime, endTime) {
    this.setState({ isOpen: true, startTime, endTime });
  }


  render() {
    const { selectedDate, events, addEvent } = this.props;
    const { isOpen, startTime, endTime } = this.state;
    return (
      <div className={styles.container}>
        <Timeline />
        <DayGrid
          events={events}
          selectedDate={selectedDate}
          openEventModal={this._openEventModal}
          modalIsOpen={isOpen}
        />
        <EventModal
          isOpen={isOpen}
          onClose={this._handleClose}
          addEvent={addEvent}
          startTime={startTime}
          endTime={endTime}
        />
      </div>
    );
  }
}

Day.propTypes = {
  selectedDate: PropTypes.object,
}

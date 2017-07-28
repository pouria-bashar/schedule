import React, { Component } from 'react';
import styles from './Day.css';
import PropTypes from 'prop-types';
import { getDayHours, isSameDate } from 'utils/dateUtils';
import Timeslot from './Timeslot';
import EventModal from '../EventModal/EventModal';
import { calculatePosition } from '../util';
import EventEntry from './EventEntry';
import { getTimeClassName } from '../util';

const gridHeight = 60; //Pixels. 1 hour grid height

export default class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this._handleClose = this._handleClose.bind(this);
    this._openEventModal = this._openEventModal.bind(this);
  }
  componentDidMount() {
    this.forceUpdate();
  }

  _handleClose() {
    this.setState({ isOpen: false });
  }

  _openEventModal(selectedDate) {
    this.setState({ isOpen: true });
  }

  _renderEvents(events = [], selectedDate, gridElement) {
    if(!gridElement) return;
    const selectedDatesEvents = events.filter((event) => isSameDate(event.startDate, selectedDate));
    return selectedDatesEvents.map((event, index) => {
      const rect = gridElement.getBoundingClientRect();
      const elementsWithSameEndTime = gridElement.getElementsByClassName(getTimeClassName(event.endTime));
      const position = calculatePosition({ event, rect, gridHeight, numberOfEntriesInHour: elementsWithSameEndTime.length, index });
      return (
        <EventEntry
          style={position.style}
          event={event}
          key={index}
        />
      )
    });
  }

  render() {
    const { selectedDate, events, addEvent } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={styles.container}>
        <div
          ref={(el) => this.grid = el}
          className={styles.grid}
        >
          {
            getDayHours().map(time => (
              <div
                className={styles.time}
                style={{ height: `${gridHeight}px`}}
                key={time}
              >
                <span>{time}</span>
                <Timeslot
                  time={time}
                  onTimeslotClick={this._openEventModal}
                />
              </div>
            ))
          }
          {this._renderEvents(events, selectedDate, this.grid)}
        </div>
        <EventModal
          isOpen={isOpen}
          onClose={this._handleClose}
          addEvent={addEvent}
        />
      </div>
    );
  }
}

Day.propTypes = {
  selectedDate: PropTypes.object,
}

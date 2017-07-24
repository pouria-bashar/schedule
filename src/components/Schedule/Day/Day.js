import React, { Component } from 'react';
import styles from './Day.css';
import PropTypes from 'prop-types';
import { getDayHours } from 'utils/dateUtils';
import Timeslot from './Timeslot';
import EventModal from '../EventModal/EventModal';


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

  _renderEvents(events, selectedDate, gridElement) {
    const selectedDatesEvents = events.filter((event) => event.startDate === selectedDate );
    console.log(events, selectedDate, gridElement);
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
              <div className={styles.time} key={time}>
                <span>{time}</span>
                <Timeslot
                  time={time}
                  onTimeslotClick={this._openEventModal}
                />
              </div>
            ))
          }
        </div>
        <EventModal
          isOpen={isOpen}
          onClose={this._handleClose}
          addEvent={addEvent}
        />
        {this._renderEvents(events, selectedDate, this.grid)}
      </div>
    );
  }
}

Day.propTypes = {
  selectedDate: PropTypes.object,
}

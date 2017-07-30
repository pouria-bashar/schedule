import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Day.css';
import { calculatePosition } from '../util';
import { getTimeClassName } from '../util';
import { getDayHours, isSameDate } from 'utils/dateUtils';
import Timeslot from './Timeslot';
import EventEntry from './EventEntry';
import { debounce } from 'lodash';

const timeslotHeight = 30;

const daySlots = getDayHours(30, 14);
class DayGrid extends Component {

  constructor(props) {
    super(props);
    this._handleMouseDown = this._handleMouseDown.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    this._handleMouseMove = this._handleMouseMove.bind(this);

    this.state = {
      top: undefined,
      firstIndex: undefined,
      lastIndex: undefined,
    }
  }
  componentDidMount() {
    this.forceUpdate();
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

  _handleMouseDown(e) {
    const rect = this.grid.getBoundingClientRect();

    const top = e.pageY - rect.top;
    const left = e.pageX - rect.left;

    this.setState({ top, isDraging: true, left, boxStyle: {} });
  }

  _handleMouseUp(e) {
    const bottom = e.pageY - 96;

    const { top } = this.state;
    const firstIndex = Math.floor(top / timeslotHeight);
    const lastIndex = Math.floor(bottom / timeslotHeight);

    this.setState({ firstIndex, lastIndex, isDraging: false, boxStyle: {} });
    this.props.openEventModal(daySlots[firstIndex], daySlots[lastIndex]);
  }

  _handleMouseMove(e) {
    const { isDraging, top, left } = this.state;
    if(isDraging) {
      const rect = this.grid.getBoundingClientRect();
      const width = Math.abs(left - e.pageX) - rect.left;
  	  const height = Math.abs(top - e.pageY) - rect.top;

      this.setState({ boxStyle: {
        position: 'absolute',
        border: 'solid 1px blue',
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`,
      }})
    }

  }


  render() {
    const { events, selectedDate, onCreateEvent } = this.props;

    const { firstIndex, lastIndex, boxStyle } = this.state;

    return (
      <div
        ref={(el) => this.grid = el}
        className={styles.grid}
        onMouseUp={this._handleMouseUp}
        onMouseMove={this._handleMouseMove}
      >
        <div style={boxStyle} />
        {
          daySlots.map((time, index) => (
            <Timeslot
              time={time}
              key={time}
              isSelected={index >= firstIndex && index <= lastIndex}
              onMouseDown={this._handleMouseDown}
              registerChild={el => this[`item_${index}`] = el}
            />
          ))
        }
        {this._renderEvents(events, selectedDate, this.grid)}
      </div>
    );
  }
}
DayGrid.propTypes = {
  className: PropTypes.string,
  openEventModal: PropTypes.func.isRequired,
};
export default DayGrid;

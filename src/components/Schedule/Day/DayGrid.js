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
const gridHeight = 60; //Pixels. 1 hour grid height

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
    // const left = e.pageX - rect.left;

    this.setState({ top, isDraging: true, boxStyle: {}, firstIndex: undefined, lastIndex: undefined });
  }

  _handleMouseUp(e) {
    console.log('mouse up', e.which);
    const { firstIndex, lastIndex } = this.state;
    this.setState({ isDraging: false, boxStyle: {} });
    this.props.openEventModal(daySlots[firstIndex], daySlots[lastIndex]);
  }

  _handleMouseMove(e) {
    const { isDraging, top, left } = this.state;
    if(isDraging) {
      const rect = this.grid.getBoundingClientRect();

  	  const height = Math.abs(top - e.pageY) - rect.top;

      const bottom = e.pageY - rect.top;

      const { top } = this.state;
      const firstIndex = Math.floor(top / timeslotHeight);
      const lastIndex = Math.floor(bottom / timeslotHeight);

      this.setState({
        firstIndex,
        lastIndex,
      })
    }

  }


  render() {
    const { events, selectedDate, modalIsOpen } = this.props;

    const { firstIndex, lastIndex, boxStyle , isDraging} = this.state;

    return (
      <div
        ref={(el) => this.grid = el}
        className={styles.grid}
        onMouseUp={this._handleMouseUp}
        onMouseMove={this._handleMouseMove}
      >
        {
          daySlots.map((time, index) => (
            <Timeslot
              time={time}
              key={time}
              text={index === firstIndex ? `${daySlots[firstIndex]}-${daySlots[lastIndex]}` : ''}
              isSelected={(modalIsOpen || isDraging) && (index >= firstIndex && index <= lastIndex)}
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

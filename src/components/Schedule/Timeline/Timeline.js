import React, { Component } from 'react';
import styles from './Timeline.css';
import PropTypes from 'prop-types';
import { Grid, AutoSizer, defaultCellRangeRenderer } from 'react-virtualized';
import { getDayHours, isSameDate , addToTime} from 'utils/dateUtils';
import { ROOMS } from 'appConstants';
import TimeHeader from './TimeHeader';
import Timeslot from './Timeslot';
import Resource from './Resource';
import EventEntry from './EventEntry';
import { calculatePosition } from './util';

const daySlots = getDayHours(15, 27);

ROOMS.unshift('');


class Timeline extends Component {

  constructor(props) {
    super(props);
    this._cellRangeRederer = this._cellRangeRederer.bind(this);
  }

  _cellRangeRederer(props) {
    const children = defaultCellRangeRenderer(props);

    const { events } = this.props;
    events.map((event) => {
      const { startTime, endTime, backgroundColor, room } = event;
      const index = ROOMS.indexOf(room) + 1;
      const position = calculatePosition({ startTime, endTime, index });
      const eventEntry = (<EventEntry style={{ ...position.style, backgroundColor }} event={event} />);
      children.push(eventEntry);
    });

    return children;
  }
  cellRenderer({ columnIndex, key, rowIndex, style }) {
    if(columnIndex === 0) {
      return (
          <Resource
            style={style}
            key={key}
            name={ROOMS[rowIndex]}
          />
      )
    }


    if(rowIndex === 0 ) {
      return (
          <TimeHeader
            key={key}
            style={style}
            time={daySlots[columnIndex]}
          />
        )
    }
    return (
      <Timeslot
        key={key}
        style={style}
      />
    )
  }

  _getRowHeight({ index }) {
    if(index === 0) return 48;
    return 64;
  }
  render() {

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
            <Grid
             cellRenderer={this.cellRenderer}
             cellRangeRenderer={this._cellRangeRederer}
             columnCount={daySlots.length}
             columnWidth={150}
             height={300}
             rowCount={ROOMS.length}
             rowHeight={this._getRowHeight}
             className={styles.grid}
             width={width}
          />
        )}
      </AutoSizer>

    );
  }
}

export default Timeline;

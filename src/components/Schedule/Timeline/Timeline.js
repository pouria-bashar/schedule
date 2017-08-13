import React, { Component } from 'react';
import styles from './Timeline.css';
import PropTypes from 'prop-types';
import { Grid, AutoSizer } from 'react-virtualized';
import { getDayHours, isSameDate , addToTime} from 'utils/dateUtils';
import TimeHeader from './TimeHeader';
import Timeslot from './Timeslot';
import Resource from './Resource';

const daySlots = getDayHours(30, 14);

const resourceNames = [ '', 'Room 1', 'Room 2', 'Room 3', 'Room 4' ];


function cellRenderer ({ columnIndex, key, rowIndex, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {list[rowIndex][columnIndex]}
    </div>
  )
}
class Timeline extends Component {

  cellRenderer({ columnIndex, key, rowIndex, style }) {
    if(columnIndex === 0) {
      return (
          <Resource
            style={style}
            key={key}
            name={resourceNames[rowIndex]}
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
    return 64;
  }
  render() {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
            <Grid
             cellRenderer={this.cellRenderer}
             columnCount={daySlots.length}
             columnWidth={150}
             height={300}
             rowCount={resourceNames.length}
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

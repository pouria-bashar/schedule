import React from 'react';
import PropTypes from 'prop-types';

const EventEntry = ({ style, event }) => (
  <div style={style}>{event.title}</div>
);
EventEntry.propTypes = {
  style: PropTypes.object,
  event: PropTypes.object,
};
export default EventEntry;

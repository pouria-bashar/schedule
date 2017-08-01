import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import NewEvent from './NewEvent';
import styles from './EventModal.css';

const style = {
  overlay: {
    backgroundColor: 'rgba(60, 63, 81, 0.4)',
    zIndex: 100,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 0,
    transform: 'translate(-50%, -50%)',
    width: '664px',
    padding: 0,
    overflow: 'visible',
    borderRadius: 'none',
  },
}
export default class EventModal extends Component {

  render() {
    const {
      selectedDate,
      isOpen,
      onClose,
      addEvent,
      startTime,
      endTime,
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Modal"
        style={style}
      >
        <NewEvent
          onClose={onClose}
          addEvent={addEvent}
          startTime={startTime}
          endTime={endTime}
          startDate={selectedDate}
        />
      </Modal>
    );
  }
}
EventModal.propTypes = {
  selectedDate: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};

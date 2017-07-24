import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EventModal.css';
import { Icon, DatePicker } from 'components';
import { DISPLAY_DATE_FORMAT, DATE_FORMAT } from 'constants';
import moment from 'moment';

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    const { addEvent, onClose } = this.props;
    // Check if valid
    this.props.addEvent(this.state);
  }
  _handleChange(e, b) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  _handleDateChange(startDate) {
    if(startDate) {
      this.setState({ startDate: startDate.toDate() });
    }
  }
  _handleBlur(e) {
    /**
     * TODO
     */
  }
  render() {
    const { onClose, addEvent } = this.props;
    return (
      <div className={styles.newEvent}>
        <div className={styles.title}>
          <h1>New Event</h1>
          <button onClick={onClose}>
            <Icon name="clear" />
          </button>
        </div>
        <form onSubmit={this._handleSubmit} className={styles.form}>
          <div>
            <label>Title:</label>
            <input
              name="title"
              type="text"
              onChange={this._handleChange}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <DatePicker
              name="startDate"
              selectedDate={this.state.startDate}
              onChange={this._handleDateChange}
              value={moment(this.state.startDate).format(DATE_FORMAT)}
              format={DATE_FORMAT}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              name="description"
              type="text"
              onChange={this._handleChange}
            />
          </div>
          <div className={styles.actions}>
            <button type="submit">Save</button>
            <button onClick={onClose} type="button">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}
NewEvent.propTypes = {
  onClose: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
};
export default NewEvent;

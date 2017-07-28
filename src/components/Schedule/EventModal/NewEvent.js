import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EventModal.css';
import { Icon, DatePicker, TimePicker } from 'components';
import { DISPLAY_DATE_FORMAT, DATE_FORMAT } from 'constants';
import moment from 'moment';
import AddSuccess from './AddSuccess';

const colors = [
  '#f1c40f',
  '#2ecc71',
  '#3498db',
  '#e67e22',
  '#e74c3c',
  '#7f8c8d',
]
class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      backgroundColor: colors[0],
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
  }

  componentDidMount() {
    if(this.title) {
      this.title.focus();
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { addEvent, onClose } = this.props;
    // Check if valid
    this.props.addEvent(this.state);
    onClose();
  }

  _handleChange(e) {
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
    const { startDate } = this.state;
    return (
      <div className={styles.newEvent}>
        <div className={styles.header}>
          <h1>New Event</h1>
          <button onClick={onClose}>
            <Icon name="clear" />
          </button>
        </div>
        <form onSubmit={this._handleSubmit} className={styles.form}>
          <div className={styles.title}>
            <label>Title:</label>
            <input
              name="title"
              type="text"
              onChange={this._handleChange}
              ref={(el) => this.title = el}
            />
          </div>
          <div>
            <label>Start Date:</label>
            <DatePicker
              name="startDate"
              selectedDate={startDate}
              onChange={this._handleDateChange}
              format={DATE_FORMAT}
              value={moment(startDate).format(DATE_FORMAT)}
            />
          </div>
          <div>
            <label>From:</label>
            <TimePicker
              name="startTime"
              onChange={this._handleChange}
              value={this.state.startTime}
            />
          </div>
          <div>
            <label>To:</label>
            <TimePicker
              name="endTime"
              onChange={this._handleChange}
              onSelect={(endTime) => this.setState({ endTime })}
            />
          </div>
          <div className={styles.colors}>
            <label>Event Color:</label>
            {
              colors.map(backgroundColor => (
                <button
                  key={backgroundColor}
                  type="button"
                  style={{ backgroundColor }}
                  onClick={() => this.setState({ backgroundColor })}
                >
                  {backgroundColor === this.state.backgroundColor && <Icon name="done" />}
                </button>
              ))
            }
          </div>
          <div className={styles.description}>
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

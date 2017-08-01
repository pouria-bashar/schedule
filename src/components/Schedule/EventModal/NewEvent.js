import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './EventModal.css';
import { Icon, DatePicker, TimePicker, FormField, ColorPicker } from 'components';
import { DISPLAY_DATE_FORMAT, DATE_FORMAT } from 'constants';
import moment from 'moment';
import AddSuccess from './AddSuccess';
import validate from './validate';


class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: props.startTime,
      endTime: props.endTime,
      errors: {
      },
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  componentDidMount() {
    if(this.title) {
      this.title.focus();
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    const { addEvent, onClose, startDate } = this.props;
    // Check if valid
    this.props.addEvent({ ...this.state, startDate });
    onClose();
  }

  _handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  _handleBlur(e) {
    /**
     * TODO
     */
  }

  render() {
    const { onClose, addEvent, startDate } = this.props;
    const { errors, startTime, endTime } = this.state;
    return (
      <div className={styles.newEvent}>
        <div className={styles.header}>
          <h1>New Event</h1>
          <button onClick={onClose}>
            <Icon name="clear" />
          </button>
        </div>
        <form onSubmit={this._handleSubmit} className={styles.form}>
            <FormField
              label="Title"
              field="input"
              name="title"
              type="text"
              error={errors['title']}
              className={styles.title}
              onChange={this._handleChange}
              registerChild={(el) => this.title = el}
            />
            <FormField
              field={TimePicker}
              label="From"
              name="startTime"
              error={errors['startTime']}
              onChange={this._handleChange}
              value={startTime}
            />
            <FormField
              field={TimePicker}
              label="To"
              name="endTime"
              error={errors['endTime']}
              onChange={this._handleChange}
              onSelect={(endTime) => this.setState({ endTime })}
              value={endTime}
            />
            <FormField
              label="Description"
              name="description"
              type="text"
              field="input"
              error={errors['description']}
              className={styles.description}
              onChange={this._handleChange}
            />
            <FormField
              label="Event Color"
              name="backgroundColor"
              field={ColorPicker}
              error={errors['description']}
              onChange={this._handleChange}
            />
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
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};
export default NewEvent;

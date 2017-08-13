import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.css';
import classNames from 'classnames/bind';
import { Icon, Calendar } from '../index';
import moment from 'moment';
import { DISPLAY_DATE_FORMAT } from 'appConstants';

const cx = classNames.bind(styles);


class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
    }
    this._handleViewChange = this._handleViewChange.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
    this._handleDateSelect = this._handleDateSelect.bind(this);
  }


  _handleViewChange(selectedView) {
    this.props.onViewChange(selectedView);
  }
  _handleDateSelect(selectedDate) {
    this.setState({ showCalendar: false });
    this.props.onDateChange(selectedDate);
  }

  _handleDateChange(amount) {
    if(amount === 0) {
      this.props.onDateChange(new Date());
      return;
    }
    const selectedDate =  moment(this.props.selectedDate).add(amount, 'days').toDate();
    this.props.onDateChange(selectedDate);
  }

  render() {
    const {
      onViewChange,
      selectedView,
      selectedDate,
    } = this.props;

    const { showCalendar } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.date}>
          <button onClick={() => this._handleDateChange(0)}>TODAY</button>
          <button onClick={() => this._handleDateChange(-1)}>
            <Icon name="keyboard_arrow_left" />
          </button>
          <button onClick={() => this._handleDateChange(1)}>
            <Icon name="keyboard_arrow_right" />
          </button>
          <div className={styles.calendarContainer}>
            <button onClick={() => this.setState({ showCalendar: !showCalendar })}>
              <Icon name="event_note" />
              <span>{moment(selectedDate).format(DISPLAY_DATE_FORMAT)}</span>
            </button>
            <div className={styles.calendar}>
              {showCalendar && (
                <Calendar
                  selectedDate={selectedDate}
                  onDateSelect={this._handleDateSelect}
                />
              )}
            </div>
          </div>

        </div>
        <div className={styles.views}>
          {
            ['Day', 'Week', 'Month', 'Timeline'].map(view => (
              <button
                className={cx({ selected: view.toLowerCase() === selectedView })}
                key={view}
                onClick={() => this._handleViewChange(view.toLowerCase())}
              >{view}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}
Toolbar.propTypes = {
  className: PropTypes.string,
  selectedView: PropTypes.string,
  onViewChange: PropTypes.func.isRequired,
};
Toolbar.defaultProps = {
  onViewChange: () => {},
};
export default Toolbar;

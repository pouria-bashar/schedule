import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.css';
import classNames from 'classnames/bind';
import { Icon, Calendar } from '../index';
import moment from 'moment';


const cx = classNames.bind(styles);


class Toolbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
    }
    this._handleViewChange = this._handleViewChange.bind(this);
  }


  _handleViewChange(selectedView) {
    this.props.onViewChange(selectedView);
  }

  render() {
    const {
      className,
      onViewChange,
      selectedView,
    } = this.props;

    const { showCalendar } = this.state;
    const containerClassName = cx({
      container: true,
      [className]: !!className,
    },
  );
    return (
      <div className={containerClassName}>
        <ul className={styles.date}>
          <li>
            <a>TODAY</a>
          </li>
          <li>
            <a><Icon name="keyboard_arrow_left" /></a>
            <a><Icon name="keyboard_arrow_right" /></a>
          </li>
          <li>
            <a><Icon name="event_note" /></a>
            <a>
              <div
                className={styles.calendarContainer}
                onClick={() => this.setState({ showCalendar: !showCalendar })}
              >
                <span>{moment().format('YYYY-DD-MM')}</span>
                <div className={styles.calendar}>
                  {showCalendar && <Calendar />}
                </div>
              </div>
            </a>
          </li>
        </ul>
        <ul className={styles.views}>
          {
            ['Day', 'Week', 'Month', 'Timeline'].map(view => (
              <li
                className={cx({ selected: view.toLowerCase() === selectedView })}
                onClick={() => this._handleViewChange(view.toLowerCase())}
              >
                <a>{view}</a>
              </li>
            ))
          }
        </ul>
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

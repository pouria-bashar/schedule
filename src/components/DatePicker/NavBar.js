import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components';
import styles from './DatePicker.css';

class NavBar extends Component {

  render() {
    const {
      onPreviousClick,
      onNextClick,
      className,
    } = this.props;
    const style = { float: 'right', cursor: 'pointer' };
    return (
      <div className={className}>
        <span
          className={styles.nextMonth}
          aria-label="Next Month"
          style={style}
          onClick={() => onNextClick()}
        >
          <Icon size="18" name="keyboard_arrow_right" />
        </span>
        <span
          className={styles.prevMonth}
          aria-label="Previous Month"
          style={style}
          onClick={() => onPreviousClick()}
        >
          <Icon size="18" name="keyboard_arrow_left" />
        </span>
      </div>
    );
  }
}
NavBar.propTypes = {
  className: PropTypes.string,
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
};
export default NavBar;

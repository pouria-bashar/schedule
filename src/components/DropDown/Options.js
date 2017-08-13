import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DropDown.css';
import { getDayHours } from 'utils/dateUtils';

class Options extends Component {

  render() {
    const { onChange, name, options } = this.props;
    return (
      <div className={styles.options}>
        <ul>
          {
            options.map(value => (
              <li onClick={() => onChange(value)} key={value}>
                <a>{value}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
Options.propTypes = {
  onSelect: PropTypes.func,
};
export default Options;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';
import classNames from 'classnames/bind';
import{ Icon } from 'components';

const cx = classNames.bind(styles);

const colors = [
  '#f1c40f',
  '#2ecc71',
  '#3498db',
  '#e67e22',
  '#e74c3c',
  '#7f8c8d',
]

class ColorPicker extends Component {

  state = {
    backgroundColor: colors[0],
  }

  _handleClick(backgroundColor) {
    this.setState({ backgroundColor });
    this.props.onChange({ target: { name: this.props.name, value: backgroundColor }});
  }

  render() {
    const {
      className,
    } = this.props;

    const containerClassName = cx({
      container: true,
      [className]: !!className,
    },
  );
    return (
      <div className={containerClassName} >
        {
          colors.map(backgroundColor => (
            <button
              key={backgroundColor}
              type="button"
              style={{ backgroundColor }}
              onClick={() =>this._handleClick.bind(this)(backgroundColor)}
            >
              {backgroundColor === this.state.backgroundColor && <Icon name="done" />}
            </button>
          ))
        }
      </div>
    );
  }
}
ColorPicker.propTypes = {
  className: PropTypes.string,
};
export default ColorPicker;

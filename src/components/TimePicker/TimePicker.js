import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from './Options';
import styles from './TimePicker.css';

class TimePicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      value: props.value,
    }
    this._handleChage = this._handleChage.bind(this);
    this._handleContainerMouseDown = this._handleContainerMouseDown.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  _handleContainerMouseDown() {
    this.clickedInside = true;
    this.clickTimeout = setTimeout(() => {
      this.clickedInside = false;
    }, 0);
  }

  _handleBlur() {
    const showOptions = this.clickedInside;
    this.setState({ showOptions });
  }


  _handleChage(value) {
    const { onChange, name } = this.props;
    this.setState({ value })
    onChange({ target: { name, value }});
  }
  render() {
    const { showOptions } = this.state;
    const { onChange, onSelect, name, value } = this.props;
    return (
      <div
        className={styles.timepicker}
        onClick={() => this.setState({ showOptions: !this.state.showOptions })}
        onBlur={this._handleBlur}
        onMouseDown={this._handleContainerMouseDown}
      >
        <input
          type="text"
          name={name}
          onChange={(e) => this._handleChage(e.target.value)}
          value={this.state.value}
        />
        {
          showOptions && (
            <Options
              name={name}
              onChange={this._handleChage}
            />
          )
        }
      </div>
    );
  }
}
TimePicker.propTypes = {

};
export default TimePicker;

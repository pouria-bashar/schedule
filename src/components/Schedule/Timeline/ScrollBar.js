import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Timeline.css';
import classNames from 'classnames/bind';
import { getDayHours } from 'utils/dateUtils';
const daySlots = getDayHours(30, 14);


const cx = classNames.bind(styles);

class ScrollBar extends Component {

  constructor(props) {
    super(props);
    this._handleMouseDown = this._handleMouseDown.bind(this);
    this._handleMouseUp = this._handleMouseUp.bind(this);
    //this._handleMouseMove = this._handleMouseMove.bind(this);


    this.state = {
      boxStyle: { left: 0 },
    }
  }
  _handleMouseDown(e) {
    e.preventDefault();
    const rect = this.marker.getBoundingClientRect();
    const left = e.pageX - rect.left + this.state.boxStyle.left;

    this.setState({
        isDraging: true,
        boxStyle: { left },
      });
  }

  _handleMouseUp(e) {
    e.preventDefault();

    const rect = this.marker.getBoundingClientRect();
    const left = e.pageX - rect.left + this.state.boxStyle.left;

    this.setState({
      isDraging: false,
      boxStyle: { left },
    });
    this.props.onScroll({ scrollLeft: left });
  }

  // _handleMouseMove(e) {
  //   const { isDraging, top, left } = this.state;
  //
  //   if(isDraging) {
  //     const rect = this.marker.getBoundingClientRect();
  //     const containerRect = this.container.getBoundingClientRect();
  //
  //     if(e.pageX < this.state.boxStyle.left) {
  //       const left = e.pageX + rect.left - this.state.boxStyle.left;
  //       if(left > containerRect.width - 24) return;
  //       this.setState({
  //         boxStyle: { left },
  //       })
  //     } else {
  //       const left = e.pageX - rect.left + this.state.boxStyle.left;
  //       if(left > containerRect.width - 24) return;
  //       this.setState({
  //         boxStyle: { left },
  //       });
  //       this.props.onScroll({ scrollLeft: left });
  //     }
  //
  //   }
  //
  // }

  render() {
    const {
      className,
      style,
    } = this.props;

    const containerClassName = cx({
      scrollBar: true,
      [className]: !!className,
    },
  );
    return (
      <div
        ref={(e) => this.container = e}
        className={containerClassName}
        style={style}
      >
        <div
          ref={(e) => this.marker = e}
          className={styles.scrollBarIcon}
          onMouseUp={this._handleMouseUp}
          onMouseMove={this._handleMouseMove}
          onMouseDown={this._handleMouseDown}
          style={this.state.boxStyle}
        >
          <i className="material-icons">pan_tool</i>
        </div>
        <div className={styles.progressTime}>
          {
            daySlots.map((time,index) => (
              <div>{time}</div>
            ))
          }
        </div>
      </div>
    );
  }
}
ScrollBar.propTypes = {
  className: PropTypes.string,
};
export default ScrollBar;

import React, { Component } from 'react';
import './styleguide.css';
import { Toolbar, Schedule, Footer, Day } from 'components';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedView: 'day',
      selectedDate: new Date(),
    }
    this._handleViewChange = this._handleViewChange.bind(this);
    this._handelDateChange = this._handelDateChange.bind(this);
  }


  _handleViewChange(selectedView) {
    this.setState({ selectedView });
  }
  _handelDateChange(selectedDate) {
    this.setState({ selectedDate });
  }
  render() {
    const { selectedView, selectedDate } = this.state;
    return (
      <div style={{ margin: '50px auto', width: '80%' }}>
        <Toolbar
          selectedView={selectedView}
          selectedDate={selectedDate}
          onViewChange={this._handleViewChange}
          onDateChange={this._handelDateChange}
        />
        <Schedule
          view={selectedView}
          selectedDate={selectedDate}
        />
        <Footer />
      </div>
    );
  }
}

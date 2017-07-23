import React, { Component } from 'react';
import './styleguide.css';
import { Toolbar, Schedule } from 'components';

export default class App extends Component {
  render() {
    return (
      <div style={{ margin: '50px auto', width: '80%' }}>
        <Toolbar />
        <Schedule.Day />
      </div>
    );
  }
}

import React, { Component } from 'react';
import './styleguide.css';
import { Toolbar, Schedule, Footer } from 'components';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedView: 'day',
    }
    this._handleViewChange = this._handleViewChange.bind(this);
  }


  _handleViewChange(selectedView) {
    this.setState({ selectedView });
  }
  render() {
    const { selectedView } = this.state;
    return (
      <div style={{ margin: '50px auto', width: '80%' }}>
        <Toolbar
          selectedView={selectedView}
          onViewChange={this._handleViewChange}
        />
        <Schedule view={selectedView} />
        <Footer />
      </div>
    );
  }
}

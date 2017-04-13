import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';
import isConnected from '../api/connection';
import './style.css';

export default class App extends Component {
  componentWillMount() {
    injectTapEventPlugin();
    if (isConnected()) browserHistory.push('/dashboard');
  }

  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

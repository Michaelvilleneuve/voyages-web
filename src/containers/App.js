import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.props.children}
        </ReactCSSTransitionGroup>
      </MuiThemeProvider>
    );
  }
}

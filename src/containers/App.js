import { Component } from 'react';
import { browserHistory } from 'react-router';
import isConnected from '../api/connection';
import './style.css';

export default class App extends Component {
  componentWillMount() {
    if (isConnected()) browserHistory.push('/dashboard');
  }

  render() {
    return this.props.children;
  }
}

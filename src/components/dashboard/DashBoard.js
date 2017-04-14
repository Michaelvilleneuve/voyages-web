import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Voyages from './voyages/List';

export default class DashBoard extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div>
          <Voyages />
          <Link to="/voyages/new">
            <FloatingActionButton style={{ position: 'fixed', bottom: 50, right: 50 }}>
              <Add />
            </FloatingActionButton>
          </Link>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

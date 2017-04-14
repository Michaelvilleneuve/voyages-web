import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Arrow from 'material-ui/svg-icons/navigation/arrow-back';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Form from './Form';
import './NewVoyage.css';

export default class NewVoyage extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className="flex-center new-voyage">
          <Link to="/dashboard">
            <FloatingActionButton style={{ position: 'fixed', top: 50, left: 50 }}>
              <Arrow />
            </FloatingActionButton>
          </Link>
            <Form />
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

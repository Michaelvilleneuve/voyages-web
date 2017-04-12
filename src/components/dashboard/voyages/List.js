import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as voyagesActions from '../../../actions/voyages';

class App extends Component {
  componentWillMount() {
    this.props.setList();
  }

  render() {
    return (
      <ul className="collection">
        {this.props.journeys.map(voyage => {
          return (
            <li className="collection-item avatar">
              <img src="{voyage.image}" alt="" className="circle" />
              <span className="title">{voyage.title}</span>
              <p>
                {voyage.description}
              </p>
              <a href="#!" className="secondary-content"><i className="material-icons">Voir</i></a>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(voyagesActions, dispatch);
const mapStateToProps = ({ voyages }) => {
  return { journeys: voyages.journeys };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

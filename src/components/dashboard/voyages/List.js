import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as voyagesActions from '../../../actions/voyages';
import Voyage from './voyage/Voyage';

class List extends Component {
  componentWillMount() {
    this.props.setList();
  }

  render() {
    if (this.props.journeys.length === 0) return (<p>Vous n'avez aucun voyage.</p>);
    return (
      <section id="voyages">
        {this.props.journeys.map((voyage, i) => <Voyage key={i} voyage={voyage} />)}
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(voyagesActions, dispatch);
const mapStateToProps = ({ voyages }) => {
  return { journeys: voyages.journeys };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

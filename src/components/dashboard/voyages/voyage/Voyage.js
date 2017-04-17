import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import { Link } from 'react-router';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../../../config';
import * as voyagesActions from '../../../../actions/voyages';
import './Voyage.css';

class Voyage extends Component {
  format(date) {
    return moment(date).locale('fr').format('LL');
  }

  deleteVoyage() {
    if (confirm('Voulez-vous vraiment supprimer ce voyage ?')) {
      this.props.deleteVoyage(this.props.voyage._id);
    }
  }

  renderSubtitle() {
    const v = this.props.voyage;
    if (!v.starts_at) return null;
    return `Du ${this.format(v.starts_at)} au ${this.format(v.ends_at)}`;
  }

  render() {
    const voyage = this.props.voyage;
    return (
      <Card className="voyage-single">
        {voyage.image ?
          <CardMedia>
            <img alt={voyage.title} src={config.api.assets(voyage.image)} />
          </CardMedia>
          : null }
        <CardTitle
          actAsExpander
          showExpandableButton
          title={voyage.title}
          subtitle={this.renderSubtitle()}
        />
        <CardText expandable>
          {voyage.description}
        </CardText>
        <CardActions>
          <FlatButton label="Revivre" />
          <Link to={`/voyages/${voyage._id}/edit`}>
            <FlatButton label="Modifier" primary />
          </Link>
          <FlatButton label="Supprimer" secondary onClick={this.deleteVoyage.bind(this)} />
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(voyagesActions, dispatch);

export default connect(null, mapDispatchToProps)(Voyage);

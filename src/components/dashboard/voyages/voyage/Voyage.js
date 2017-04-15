import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import './Voyage.css';

export default class Voyage extends Component {
  format(date) {
    return moment(date).locale('fr').format('LL');
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
          <FlatButton label="Modifier" primary />
        </CardActions>
      </Card>
    );
  }
}

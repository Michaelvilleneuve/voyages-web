import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Voyage.css';

export default class Voyage extends Component {
  render() {
    const voyage = this.props.voyage;
    return (
      <Card className="voyage-single">
        <CardTitle
          actAsExpander
          showExpandableButton
          title={voyage.title}
          subtitle={`Du ${voyage.starts_at} au ${voyage.ends_at}`}
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

import React, { Component } from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';

export default class Form extends Component {
  render() {
    return (
      <div style={{ float: 'left', width: '50%', paddingTop: 30 }}>
        <Card>
          <CardTitle
            title="Créer un voyage"
            subtitle="C'est le début de l'aventure"
          />
          <CardText>
            <TextField hintText="Titre" fullWidth />
            <DatePicker hintText="Début" autoOk fullWidth />
            <DatePicker hintText="Fin" autoOk fullWidth />
            <TextField hintText="Description" multiLine fullWidth rows={4} />
          </CardText>
          <CardText>
            <Toggle
              onToggle={this.handleToggle}
              labelPosition="right"
              label="Rendre mon voyage public"
            />
            <br />
          </CardText>
          <CardActions>
            <FlatButton label="Enregistrer" primary />
          </CardActions>
        </Card>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as userActions from '../actions/user';
import Center from './shared/Center';
import './LoginForm.css';


class LoginForm extends Component {
  state = {
    password: '',
    email: '',
    name: '',
    login: true
  }

  mailChanged(e) { this.setState({ email: e.target.value }); }
  passChanged(e) { this.setState({ password: e.target.value }); }
  nameChanged(e) { this.setState({ name: e.target.value }); }

  login() { this.props.login(this.state); }

  createAccount() { this.props.createAccount(this.state); }

  creating() {
    this.setState({ login: !this.state.login });
  }

  renderActions() {
    if (this.state.login) {
      return (
        <div>
          <FlatButton primary label="Envoyer" onClick={this.login.bind(this)} />
          <FlatButton label="Créer un compte" onClick={this.creating.bind(this)} />
        </div>
      );
    }
    return (
      <div>
        <FlatButton primary label="Envoyer" onClick={this.createAccount.bind(this)} />
        <FlatButton label="Se connecter" onClick={this.creating.bind(this)} />
      </div>
    );
  }

  renderNameField() {
    if (this.state.login) return null;
    return (
      <TextField
        hintText="Votre nom"
        floatingLabelText="Nom"
        type="name"
        onChange={this.nameChanged.bind(this)}
        value={this.state.name}
        fullWidth
      />
    );
  }

  render() {
    return (
      <Center>
        <Card style={{ width: '90%', maxWidth: 600 }}>
          <CardTitle
            title={this.state.login ? 'Se connecter' : 'Créer un compte'}
            subtitle="Partagez votre histoire, écrivez vos souvenirs"
            style={{ paddingBottom: 0 }}
          />
          <CardText style={{ paddingTop: 0 }}>
            {this.renderNameField()}
            <TextField
              hintText="votre@email.com"
              floatingLabelText="Email"
              type="email"
              onChange={this.mailChanged.bind(this)}
              value={this.state.email}
              fullWidth
            />
            <TextField
              hintText="Minimum 6 charactères"
              floatingLabelText="Mot de passe"
              type="password"
              onChange={this.passChanged.bind(this)}
              value={this.state.password}
              fullWidth
            />
          </CardText>
          <CardActions>
            {this.renderActions()}
          </CardActions>
        </Card>
      </Center>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
const mapStateToProps = ({ user }) => {
  const { error, isLogging } = user;
  return { error, isLogging };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

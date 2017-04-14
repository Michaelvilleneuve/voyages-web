import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import * as userActions from '../actions/user';
import './LoginForm.css';


class LoginForm extends Component {
  state = {
    password: '',
    email: ''
  }

  mailChanged(e) {
    this.setState({ email: e.target.value });
  }

  passChanged(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    this.props.login(this.state);
  }

  render() {
    return (
      <section className="loginForm">
        <Card style={{ width: '90%', maxWidth: 600 }}>
          <CardTitle
            title="Voyages"
            subtitle="Partagez votre histoire, écrivez vos souvenirs"
            style={{ paddingBottom: 0 }}
          />
          <CardText style={{ paddingTop: 0 }}>
            <TextField
              hintText="votre@email.com"
              floatingLabelText="Email"
              type="email"
              validate
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
            <FlatButton primary label="Se connecter" onClick={this.login.bind(this)} />
            <Link to="/users/new">
              <FlatButton label="Créer un compte" />
            </Link>
          </CardActions>
        </Card>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
const mapStateToProps = ({ user }) => {
  const { error, isLogging } = user;
  return { error, isLogging };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

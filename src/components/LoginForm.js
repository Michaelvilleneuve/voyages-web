import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user';
import Button from './shared/Button';
import Input from './shared/Input';
import Label from './shared/Label';
import Loadr from './shared/Loadr';
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

  renderButton() {
    if (this.props.logging) return <Loadr style={{ marginTop: 20 }} />;
    return (
      <Button type="button" onClick={this.login.bind(this)}>
        Se connecter
      </Button>
    );
  }

  renderError() {
    if (this.props.error !== '' && !this.props.logging) return <span>{this.props.error}</span>;
  }

  render() {
    return (
      <section className="loginForm">
        <form>
          <h1>Votre blog voyage</h1>
          <hr />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            onChange={this.mailChanged.bind(this)}
            value={this.state.email}
          />
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            type="password"
            onChange={this.passChanged.bind(this)}
            value={this.state.password}
          />
          {this.renderButton()}
          {this.renderError()}
        </form>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
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

  renderButton() {
    return [<FlatButton primary label="Se connecter" onClick={this.login.bind(this)} />];
  }

  renderError() {
    if (this.props.error !== '' && !this.props.logging) return <span>{this.props.error}</span>;
  }

  render() {
    const s = {
      width: '100%',
      maxWidth: '500px',
    };

    return (
      <section className="loginForm">
        <Dialog
          title="Se connecter"
          open={!this.props.isLogging}
          actions={this.renderButton()}
          contentStyle={s}
        >
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
            floatingLabelText="Password"
            type="password"
            onChange={this.passChanged.bind(this)}
            value={this.state.password}
            fullWidth
          />
          {this.renderError()}
        </Dialog>
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

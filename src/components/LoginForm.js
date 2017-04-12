import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user';

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
    <section className="row">
      <div className="col s4" />
      <div className="col s4">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="col s12">
                <h4>Log in</h4>
              </div>
              <div className="input-field col s12">
                <input
                  type="email"
                  className="validate"
                  onChange={this.mailChanged.bind(this)}
                  value={this.state.email}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="password"
                  className="validate"
                  onChange={this.passChanged.bind(this)}
                  value={this.state.password}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  type="button"
                  onClick={this.login.bind(this)}
                  className="waves-effect waves-light btn-large"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col s4" />
    </section>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(null, mapDispatchToProps)(LoginForm);

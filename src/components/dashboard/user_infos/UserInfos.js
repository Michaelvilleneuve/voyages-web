import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../actions/user';

class UserInfos extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.user === null) return null;

    return (
      <aside>
        <h2>{this.props.user.name}</h2>
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
const mapStateToProps = ({ user }) => {
  return { user: user.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfos);

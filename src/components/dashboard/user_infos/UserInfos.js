import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Add from 'material-ui/svg-icons/content/add';
import * as userActions from '../../../actions/user';
import './UserInfos.css';

class UserInfos extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.user === null) return null;

    return (
      <aside className="user">
        <Link to="/voyages/new">
          <FloatingActionButton style={{ position: 'absolute', bottom: 20, right: 30 }} on>
            <Add />
          </FloatingActionButton>
        </Link>
        <h2>{this.props.user.name}</h2>
        <hr />
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);
const mapStateToProps = ({ user }) => {
  return { user: user.user };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfos);

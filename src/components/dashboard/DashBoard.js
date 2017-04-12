import React, { Component } from 'react';
import Voyages from './voyages/List';
import UserInfos from './user_infos/UserInfos';

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <UserInfos />
        <Voyages />
      </div>
    );
  }
}

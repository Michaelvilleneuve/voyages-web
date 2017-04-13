import React, { Component } from 'react';
import UserInfos from '../dashboard/user_infos/UserInfos';
import Form from './Form';

export default class Voyage extends Component {
  render() {
    return (
      <div>
        <UserInfos />
        <Form />
      </div>
    );
  }
}

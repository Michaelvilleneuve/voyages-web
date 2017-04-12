import { browserHistory } from 'react-router';
import { LOGIN } from '../types/user';
import API from '../api/api';

export function login(payload) {
  return (dispatch) => {
    API.post('/users/signin', JSON.stringify(payload))
      .then(res => res.json())
      .then((res) => {
        if (res.token) {
          sessionStorage.setItem('token', res.token);
          browserHistory.push('/dashboard');
          dispatch({ type: LOGIN });
        }
      })
      .catch(() => { alert('pas ok'); });
  };
}

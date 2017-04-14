import { browserHistory } from 'react-router';
import { LOGIN, LOGGED_IN, LOGIN_FAIL, SET_USER } from '../types/user';
import API from '../api/api';

export function login(payload) {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    API.post('/users/signin', JSON.stringify(payload))
      .then(res => res.json())
      .then((res) => {
        if (res.user) {
          sessionStorage.setItem('token', res.user.token);
          browserHistory.push('/dashboard');
          dispatch({ type: LOGGED_IN });
        }
      })
      .catch(() => dispatch({ type: LOGIN_FAIL, payload: 'Impossible de se connecter' }));
  };
}

export function createAccount(payload) {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    API.post('/users/', JSON.stringify(payload))
      .then(res => res.json())
      .then((res) => {
        if (res.user) {
          sessionStorage.setItem('token', res.user.token);
          browserHistory.push('/dashboard');
          dispatch({ type: LOGGED_IN });
        }
      })
      .catch(() => dispatch({ type: LOGIN_FAIL, payload: 'Impossible de se connecter' }));
  };
}

export function fetchUser() {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    API.get('/users/me')
      .then(res => res.json())
      .then((user) => {
        if (user) {
          dispatch({ type: SET_USER, payload: user });
        }
      });
  };
}

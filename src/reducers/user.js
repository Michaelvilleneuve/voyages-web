import { LOGIN, LOGGED_IN, LOGIN_FAIL, SET_USER } from '../types/user';

const initialState = {
  error: '',
  logging: false,
  user: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, logging: true, error: '' };
    case LOGGED_IN:
      return { ...state, logging: false, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, logging: false, error: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

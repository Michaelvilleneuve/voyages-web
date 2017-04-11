import { LOGIN } from '../types/user';

export function login(payload) {
  return {
    type: LOGIN,
    payload: {
      email: payload.email,
      password: payload.password,
    }
  }
};

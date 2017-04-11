import { LOGIN } from '../types/user'

const initialState = {};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, ...action.payload}
    default:
      return state
  }
}

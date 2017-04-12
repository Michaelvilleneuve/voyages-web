import { LIST } from '../types/voyages';

const initialState = {
  journeys: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST:
      return { ...state, journeys: action.payload.journeys };
    default:
      return state;
  }
}

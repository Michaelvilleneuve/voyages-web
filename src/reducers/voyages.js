import { LIST, VALIDATE_FORM } from '../types/voyages';

const initialState = {
  journeys: [],
  errors: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST:
      return { ...state, journeys: action.payload.journeys };
    case VALIDATE_FORM:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}

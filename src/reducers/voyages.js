import { LIST, VALIDATE_FORM, CREATING_VOYAGE } from '../types/voyages';

const initialState = {
  journeys: [],
  errors: {},
  creating: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST:
      return { ...state, journeys: action.payload.journeys };
    case VALIDATE_FORM:
      return { ...state, errors: action.payload };
    case CREATING_VOYAGE:
      return { ...state, creating: action.payload };
    default:
      return state;
  }
}

import { LIST } from '../types/voyages';
import API from '../api/api';

export function setList() {
  return (dispatch) => {
    API.get('/journeys/')
      .then((res) => res.json())
      .then((journeys) => {
        dispatch({
          type: LIST,
          payload: { journeys }
        });
      });
  };
}

import { browserHistory } from 'react-router';
import { LIST, VALIDATE_FORM } from '../types/voyages';
import API from '../api/api';

export function setList() {
  return (dispatch) => {
    fetchVoyages(dispatch);
  };
}

function fetchVoyages(dispatch) {
  API.get('/journeys/')
    .then((res) => res.json())
    .then((journeys) => {
      dispatch({
        type: LIST,
        payload: { journeys }
      });
    });
}

export function createVoyage(form) {
  return (dispatch) => {
    const reader = new FileReader();
    reader.readAsDataURL(form.file);
    reader.addEventListener('load', () => {
      const data = JSON.stringify(Object.assign({ image: reader.result }, form));
      API.post('/journeys/', data)
      .then((res) => res.json())
      .then((journey) => {
        if ('errors' in journey) {
          renderFormErrors(journey, dispatch);
        } else {
          browserHistory.push('/dashboard');
        }
      });
    });
  };
}

export function deleteVoyage(id) {
  return (dispatch) => {
    API.delete(`/journeys/${id}`)
      .then((res) => {
        if (res.status === 200) {
          fetchVoyages(dispatch);
        }
      });
  };
}

function renderFormErrors(journey, dispatch) {
  const errors = {};
  Object.keys(journey.errors).forEach((e) => errors[e] = journey.errors[e].message);
  dispatch({ type: VALIDATE_FORM, payload: errors });
}

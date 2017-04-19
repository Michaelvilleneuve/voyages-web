import { browserHistory } from 'react-router';
import { LIST, VALIDATE_FORM, CREATING_VOYAGE } from '../types/voyages';
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
    dispatch({ type: CREATING_VOYAGE, payload: true });
    console.log(!form.file, form.file);
    if (!form.file) return sendVoyage(dispatch, form);

    const reader = new FileReader();
    reader.readAsDataURL(form.file);
    reader.addEventListener('load', () => {
      sendVoyage(dispatch, Object.assign({ image: reader.result }, form));
    });
  };
}

function sendVoyage(dispatch, data) {
  return createOrUpdate(data)
    .then((res) => res.json())
    .then((journey) => {
      dispatch({ type: CREATING_VOYAGE, payload: false });
      if ('errors' in journey) {
        renderFormErrors(journey, dispatch);
      } else {
        browserHistory.push('/dashboard');
      }
    })
    .catch(() => {
      dispatch({ type: CREATING_VOYAGE, payload: false });
    });
}

function createOrUpdate(data) {
  const json = JSON.stringify(data);
  if (data._id) return API.put(`/journeys/${data._id}`, json);
  return API.post('/journeys/', json);
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

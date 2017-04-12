import { browserHistory } from 'react-router';
import config from '../config';
import token from './connection';

const API = {
  url: config.api.url,

  async headers(additionals = {}) {
      const headers = {
        Authorization: `Bearer ${token()}`,
        'content-type': 'application/json'
      };
      return new Headers(Object.assign(additionals, headers));
  },

  getUrl(url) {
    if (url.substring(0, 4) === 'http') {
      return url;
    }
    const parsedUrl = (url.charAt(0) === '/') ? url.substring(1) : url;
    return this.url + parsedUrl;
  },

  async get(url) {
    return fetch(this.getUrl(url), {
      headers: await API.headers(),
    }).then(response => API.checkStatus(response));
  },

  async post(url, data, headers = {}) {
    return fetch(this.getUrl(url), {
      headers: await API.headers(headers),
      method: 'POST',
      body: data
    }).then(response => API.checkStatus(response));
  },

  checkStatus(response) {
    if (response.status === 401) {
      sessionStorage.removeItem('token');
      browserHistory.push('/');
    }
    return response;
  }
};

export default API;

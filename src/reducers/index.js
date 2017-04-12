import { combineReducers } from 'redux';

import user from './user';
import voyages from './voyages';

export default combineReducers({
  user,
  voyages
});

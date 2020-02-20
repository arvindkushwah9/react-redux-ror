import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { patients } from './patients.reducer';

const rootReducer = combineReducers({
  patients,
  alert
});

export default rootReducer;
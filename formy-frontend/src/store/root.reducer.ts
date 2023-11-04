import { combineReducers } from 'redux';

import taskReducer from './slice/task.slice';

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
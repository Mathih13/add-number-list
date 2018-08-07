import { combineReducers } from 'redux';
import { logLoadReducer } from "./logLoadReducer";
import {firebaseReducer} from "./firebaseReducer";

const rootReducer = combineReducers({
  logLoader: logLoadReducer,
  firebaseData: firebaseReducer,
});

export default rootReducer;

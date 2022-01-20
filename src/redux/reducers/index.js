import { combineReducers } from 'redux';
import BasicDetailsReducer from "./BasicDetailsReducer"



// Combine all the reducers
export default combineReducers({
     basic:BasicDetailsReducer 
});
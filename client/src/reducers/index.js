import { combineReducers } from 'redux';
import fishReducer from './fishReducer';

export default combineReducers({
    fish: fishReducer
});

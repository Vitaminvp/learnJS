import { combineReducers } from 'redux';
import counterReducer from './counter';
import articles from './article'

export default combineReducers({
    count: counterReducer,
    articles

});
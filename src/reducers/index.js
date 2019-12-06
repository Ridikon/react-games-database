import { combineReducers } from 'redux';
import loading from './loadingReducer';
import category from './categoryReducer';
import title from './titleReducer';
import filter from './filterReducer';

export default combineReducers({
  loading,
  category,
  title,
  filter
})

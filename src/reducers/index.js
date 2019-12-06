import { combineReducers } from 'redux';
import games from './gamesReducer';
import loading from './loadingReducer';
import category from './categoryReducer';
import platforms from './platformsReducer';
import title from './titleReducer';
import filter from './filterReducer';

export default combineReducers({
  games,
  platforms,
  loading,
  category,
  title,
  filter
})

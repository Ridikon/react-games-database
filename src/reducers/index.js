import { combineReducers } from 'redux';
import { gamesReducer } from './gamesReducer';
import { loadingReducer } from './loadingReducer';
import { categoryReducer } from './categoryReducer';
import { platformsReducer } from './platformsReducer';
import { titleReducer } from './titleReducer';
import { filterReducer } from './filterReducer';

export default combineReducers({
  games: gamesReducer,
  platforms: platformsReducer,
  loading: loadingReducer,
  category: categoryReducer,
  title: titleReducer,
  filter: filterReducer
})

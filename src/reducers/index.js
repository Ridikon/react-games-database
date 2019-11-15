import { combineReducers } from 'redux';
import { gamesReducer } from './gamesReducer';
import { loadingReducer } from './loadingReducer';
import { categoryReducer } from './categoryReducer';
import { platformsReducer } from './platformsReducer';

export default combineReducers({
  games: gamesReducer,
  platforms: platformsReducer,
  loading: loadingReducer,
  category: categoryReducer
})

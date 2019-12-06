import { FETCH_GAMES } from '../../action-types/gamesConstants';
import { constCategories } from '../../constants/categories-constants';
import { fetchDataThunk } from '../../thunks/fetchDataThunk';

export const fetchGamesAction = (data) => {
  return {
    type: FETCH_GAMES,
    payload: data
  }
};

export const fetchGames = () => (dispatch) => fetchDataThunk(dispatch, constCategories.gamesCategory, fetchGamesAction);

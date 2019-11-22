import { FETCH_GAMES, SET_GAMES_RANGE } from '../../constants/gamesConstants';
import { loadingEnd, loadingStart } from '../loadingActions';
import API from '../../api';

export const fetchGamesAction = (data) => {
  return {
    type: FETCH_GAMES,
    payload: data
  }
};

export const setGamesRangeAction = (range) => {
  return {
    type: SET_GAMES_RANGE,
    payload: range
  }
};

export const fetchGames = () => (dispatch) => {
  dispatch(loadingStart());

  API.get('games').then(res => {
    dispatch(loadingEnd());
    dispatch(fetchGamesAction(res.data))
  }).catch(e => {
    dispatch(loadingEnd());
    console.log(e)
  });
};

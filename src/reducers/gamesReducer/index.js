import { FETCH_GAMES, SET_GAMES_RANGE } from '../../constants/gamesConstants';

let initialState = {
  games: {},
  gamesRange: {}
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case SET_GAMES_RANGE:
      return {
        ...state,
        gamesRange: action.payload
      };
    default:
      return state;
  }
};

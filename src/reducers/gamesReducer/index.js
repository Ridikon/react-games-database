import { FETCH_GAMES } from '../../constants/gamesConstants';

let initialState = {
  games: {}
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
};

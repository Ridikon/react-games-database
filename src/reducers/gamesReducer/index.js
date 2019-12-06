import { FETCH_GAMES } from '../../action-types/gamesConstants';

const initialState = {
  gamesData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        gamesData: action.payload
      };
    default:
      return state;
  }
};

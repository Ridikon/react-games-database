import { FETCH_PLATFORMS } from '../../constants/platformsConstants';

let initialState = {
  platforms: []
};

export const platformsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      };
    default:
      return state;
  }
};

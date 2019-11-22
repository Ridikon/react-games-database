import { FETCH_PLATFORMS, SET_PLATFORMS_RANGE } from '../../constants/platformsConstants';

let initialState = {
  platforms: {},
  platformsRange: {}
};

export const platformsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLATFORMS:
      return {
        ...state,
        platforms: action.payload
      };
    case SET_PLATFORMS_RANGE:
      return {
        ...state,
        platformsRange: action.payload
      };
    default:
      return state;
  }
};

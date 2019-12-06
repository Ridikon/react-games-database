import { FETCH_PLATFORMS } from '../../action-types/platformsConstants';

const initialState = {
  platformsData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLATFORMS:
      return {
        ...state,
        platformsData: action.payload
      };
    default:
      return state;
  }
};

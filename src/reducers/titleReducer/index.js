import { SET_TITLE } from '../../constants/titleConstants';

let initialState = {
  title: ''
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
};

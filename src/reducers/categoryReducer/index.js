import { SELECT_CATEGORY } from '../../constants/categoryConstants';

let initialState = {
  category: 'platforms'
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};

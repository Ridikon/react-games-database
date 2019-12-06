import { SELECT_CATEGORY, SET_CATEGORY_DATA } from '../../action-types/categoryConstants';
import { constCategories } from '../../constants/categories-constants';

const initialState = {
  categoryTitle: constCategories.gamesCategory,
  categoryData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        categoryTitle: action.payload
      };
    case SET_CATEGORY_DATA:
      return {
        ...state,
        categoryData: action.payload
      };
    default:
      return state;
  }
};

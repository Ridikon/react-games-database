import { SELECT_CATEGORY } from '../../constants/categoryConstants';

export const changeCategoryAction = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: category
  }
}

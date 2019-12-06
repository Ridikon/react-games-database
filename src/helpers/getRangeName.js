import { constCategories } from '../constants/categories-constants';
import { constRange } from '../constants/range-constants';

const {rating, gamesCount} = constRange;

export function getRangeName(category) {
  return category === constCategories.gamesCategory ? rating : gamesCount;
}

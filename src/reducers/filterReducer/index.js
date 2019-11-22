import { FILTER_RESET, SORT_ASC, SORT_DESC, SORT_RANGE } from '../../constants/filterConstants';

let initialState = {
  sortedAt: '',
  range: []
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ASC:
      return {
        ...state,
        sortedAt: 'asc'
      };
    case SORT_DESC:
      return {
        ...state,
        sortedAt: 'desc'
      };
    case SORT_RANGE:
      return {
        ...state,
        range: action.payload
      };
    case FILTER_RESET:
      return {
        ...state,
        sortedAt: initialState.sortedAt
      };
    default:
      return state;
  }
};

import { FILTER_RESET, SORT_ASC, SORT_DESC } from '../../constants/filterConstants';

let initialState = {
  sort: ''
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ASC:
      return {
        ...state,
        sort: 'asc'
      };
    case SORT_DESC:
      return {
        ...state,
        sort: 'desc'
      };
    case FILTER_RESET:
      return {
        state: initialState,
      };
    default:
      return state;
  }
};

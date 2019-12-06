import {
  FILTER_RESET,
  QUERY_SEARCH,
  SORT_ASC,
  SORT_DESC,
  SORT_RANGE,
  SORT_RESET
} from '../../action-types/filterConstants';

const initialState = {
  sortedAt: '',
  range: null,
  searchText: ''
};

export default (state = initialState, action) => {
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
    case SORT_RESET:
      return {
        ...state,
        sortedAt: initialState.sortedAt
      };
    case QUERY_SEARCH:
      return {
        ...state,
        searchText: action.payload
      };
    case FILTER_RESET:
      return initialState;
    default:
      return state;
  }
};

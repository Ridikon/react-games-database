import {
  FILTER_RESET,
  QUERY_SEARCH,
  SORT_ASC,
  SORT_DESC,
  SORT_RANGE,
  SORT_RESET
} from '../../action-types/filterConstants';

export const sortAscAction = () => {
  return {
    type: SORT_ASC
  }
};

export const sortDescAction = () => {
  return {
    type: SORT_DESC
  }
};

export const sortResetAction = () => {
  return {
    type: SORT_RESET
  }
};

export const sortRangeAction = (value) => {
  return {
    type: SORT_RANGE,
    payload: value
  }
};

export const querySearchAction = (value) => {
  return {
    type: QUERY_SEARCH,
    payload: value
  }
};

export const filterResetAction = () => {
  return {
    type: FILTER_RESET
  }
};

export const sortingAction = (value) => (dispatch) => {
  switch (value) {
    case 'asc':
      dispatch(sortAscAction());
      break;
    case 'desc':
      dispatch(sortDescAction());
      break;
    default:
      dispatch(sortResetAction());
  }
};

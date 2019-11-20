import { FILTER_RESET, SORT_ASC, SORT_DESC } from '../../constants/filterConstants';

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
      dispatch(filterResetAction());
  }
};

import { batch } from 'react-redux';

import { SELECT_CATEGORY, SET_CATEGORY_DATA } from '../../action-types/categoryConstants';
import { loadingEnd, loadingStart } from '../loadingActions';
import API from '../../api';

export const changeCategoryAction = (category) => {
  return {
    type: SELECT_CATEGORY,
    payload: category
  }
};

export const setDataActionCreator = (data) => {
  return {
    type: SET_CATEGORY_DATA,
    payload: data
  }
};

export const fetchData = () => (dispatch, getState) => {
  const state = getState();
  const { categoryTitle } = state.category;
  dispatch(loadingStart());

  API.get(categoryTitle).then(res => {
    batch(() => {
      dispatch(loadingEnd());
      dispatch(setDataActionCreator(res.data))
    })
  }).catch(e => {
    dispatch(loadingEnd());
    console.log(e)
  });
};

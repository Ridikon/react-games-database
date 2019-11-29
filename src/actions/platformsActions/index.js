import { batch } from 'react-redux';
import { FETCH_PLATFORMS, SET_PLATFORMS_RANGE } from '../../constants/platformsConstants';
import { loadingEnd, loadingStart } from '../loadingActions';
import API from '../../api';

export const fetchPlatformsAction = (data) => {
  return {
    type: FETCH_PLATFORMS,
    payload: data
  }
};

export const setPlatformsRangeAction = (range) => {
  return {
    type: SET_PLATFORMS_RANGE,
    payload: range
  }
};

export const fetchPlatforms = () => (dispatch) => {
  dispatch(loadingStart());

  API.get('platforms').then(res => {
    batch(() => {
      dispatch(loadingEnd());
      dispatch(fetchPlatformsAction(res.data))
    })
  }).catch(e => {
    dispatch(loadingEnd());
    console.log(e)
  });
};

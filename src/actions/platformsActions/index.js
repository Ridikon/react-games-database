import { FETCH_PLATFORMS } from '../../constants/platformsConstants';
import { loadingEnd, loadingStart } from '../loadingActions';
import API from '../../api';

export const fetchPlatformsAction = (data) => {
  return {
    type: FETCH_PLATFORMS,
    payload: data
  }
};

export const fetchPlatforms = () => (dispatch) => {
  dispatch(loadingStart());

  API.get('platforms').then(res => {
    dispatch(loadingEnd());
    dispatch(fetchPlatformsAction(res.data))
  }).catch(e => {
    dispatch(loadingEnd());
    console.log(e)
  });
};

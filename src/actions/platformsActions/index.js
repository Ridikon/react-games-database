import { loadingEnd, loadingStart } from '../loadingActions';
import { FETCH_PLATFORMS } from '../../constants/platformsConstants';
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
    dispatch(fetchPlatformsAction(res.data.results))
  }).catch(e => {
    dispatch(loadingEnd());
    console.log(e)
  });
};

import { FETCH_PLATFORMS } from '../../action-types/platformsConstants';
import { constCategories } from '../../constants/categories-constants';
import { fetchDataThunk } from '../../thunks/fetchDataThunk';

export const fetchPlatformsAction = (data) => {
  return {
    type: FETCH_PLATFORMS,
    payload: data
  }
};

export const fetchPlatforms = () => (dispatch) => fetchDataThunk(dispatch, constCategories.platformsCategory, fetchPlatformsAction);

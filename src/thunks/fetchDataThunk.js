import { batch } from 'react-redux';
import { loadingEnd, loadingStart } from '../actions/loadingActions';
import API from '../api';

export function fetchDataThunk(dispatch, category, action) {
  dispatch(loadingStart());

  API.get(category).then(res => {
    batch(() => {
      dispatch(loadingEnd());
      dispatch(action(res.data))
    })
  }).catch(e => {
    dispatch(loadingEnd());
    console.log(e)
  });
}

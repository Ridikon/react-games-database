import { SET_TITLE } from '../../constants/titleConstants';

export const changeTitleAction = (title) => {
  return {
    type: SET_TITLE,
    payload: title
  }
};

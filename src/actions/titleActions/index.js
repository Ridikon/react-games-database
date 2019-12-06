import { SET_TITLE } from '../../action-types/titleConstants';

export const changeTitleAction = (title) => {
  return {
    type: SET_TITLE,
    payload: title
  }
};

import { LOADING_END, LOADING_START } from '../../action-types/loadingConstants';

export const loadingStart = () => {
  return {
    type: LOADING_START
  }
};

export const loadingEnd = () => {
  return {
    type: LOADING_END
  }
};

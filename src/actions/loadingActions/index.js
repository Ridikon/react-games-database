import { LOADING_END, LOADING_START } from '../../constants/loadingConstants';

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

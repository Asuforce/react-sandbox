import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (num: number) => ({
  num,
  type: actionTypes.INPUT_NUMBER,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});

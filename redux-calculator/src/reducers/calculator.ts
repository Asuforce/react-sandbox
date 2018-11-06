import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

export default (
  state: {
    inputValue: number;
    resultValue: number;
    showingResult: boolean;
  } = initialAppState,
  action: {
    type: string;
  },
) => {
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + actionTypes.INPUT_NUMBER,
        showingResult: false,
      };
    case actionTypes.PLUS:
      return {
        ...state,
        inputValue: 0,
        showingResult: false,
      };
    default:
      return state;
  }
};

import * as actionTypes from 'utils/actionTypes';

export interface Calculator {
  inputValue: number;
  resultValue: number;
  showingResult: boolean;
}

const initialAppState: Calculator = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

export default (
  state: Calculator = initialAppState,
  action: { type: string; num: number },
) => {
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.num,
        showingResult: false,
      };
    case actionTypes.PLUS:
      return {
        ...state,
        inputValue: 0,
        resultValue: state.resultValue + state.inputValue,
        showingResult: true,
      };
    default:
      return state;
  }
};

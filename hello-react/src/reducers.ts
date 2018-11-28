import * as Assign from 'object-assign';
import * as Redux from 'redux';
import * as Actions from './actions';
import * as Models from './models';

export function add(
  state: Models.Calc,
  action: Actions.Action<Actions.AddPayload>,
): Models.Calc {
  switch (action.type) {
    case Actions.ActionTypes.Add:
      // tslint:disable-next-line:no-object-literal-type-assertion
      return Assign({}, state, {
        x: action.payload.x,
        y: action.payload.y,
      } as Models.Calc);
    default:
      return state;
  }
}

export function setAnswer(
  state: Models.Calc,
  action: Actions.Action<Actions.SetAnswerPayload>,
): Models.Calc {
  switch (action.type) {
    case Actions.ActionTypes.SetAnswer:
      // tslint:disable-next-line:no-object-literal-type-assertion
      return Assign({}, state, {
        answer: action.payload.answer,
      } as Models.Calc);
    default:
      return state;
  }
}

export function calc(
  state: Models.Calc = new Models.Calc(0, 0, 0),
  action: Actions.Action<any>,
): Models.Calc {
  switch (action.type) {
    case Actions.ActionTypes.Add:
      return add(state, action);
    case Actions.ActionTypes.SetAnswer:
      return setAnswer(state, action);
    default:
      return state;
  }
}

export interface CalcAppState {
  calc: Models.Calc;
}

const calcApp = Redux.combineReducers({
  calc,
});

export default calcApp;

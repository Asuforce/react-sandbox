import * as Redux from 'redux';

export enum ActionTypes {
  Add,
  SetAnswer,
}

export interface Action<T> {
  type: ActionTypes;
  payload: T;
}

export class AddPayload {
  constructor(public x: number, public y: number) {}
}

// tslint:disable-next-line:max-classes-per-file
export class SetAnswerPayload {
  constructor(public answer: number) {}
}

export function add(x: number, y: number): Action<AddPayload> {
  return {
    type: ActionTypes.Add,
    payload: new AddPayload(x, y),
  };
}

export function setAnswer(answer: number): Action<SetAnswerPayload> {
  return {
    type: ActionTypes.SetAnswer,
    payload: new SetAnswerPayload(answer),
  };
}

export function fetchAdd(x: number, y: number): any {
  return (dispatch: Redux.Dispatch) => {
    dispatch(add(x, y));

    setTimeout(() => dispatch(setAnswer(x + y)), 3000);
  };
}

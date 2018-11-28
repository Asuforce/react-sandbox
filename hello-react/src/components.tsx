import * as React from 'react';
import * as Redux from 'redux';
import * as Actions from './actions';
import * as Models from './models';

export interface ComponentProps extends React.Props<{}> {
  calc?: Models.Calc;
  dispatch?: Redux.Dispatch;
}

export class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private x: HTMLInputElement;
  private y: HTMLInputElement;

  public render() {
    const { calc } = this.undefinedCheck(this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          ref={x => {
            this.x = this.undefinedCheck(x);
          }}
        />
        <span>+</span>
        <input
          type="number"
          ref={y => {
            this.y = this.undefinedCheck(y);
          }}
        />
        <hr />
        <span>
          {this.undefinedCheck(calc.x)} + {this.undefinedCheck(calc.y)} ={' '}
          {this.undefinedCheck(calc.answer)}
        </span>
        <input type="submit" value="Sum" />
      </form>
    );
  }

  private handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const x = this.x.valueAsNumber;
    const y = this.y.valueAsNumber;

    if (x && y && this.props.dispatch !== undefined) {
      this.props.dispatch(Actions.fetchAdd(x, y));
    }
  }

  private undefinedCheck(param: any) {
    return param !== undefined ? param : {};
  }
}

export default Component;

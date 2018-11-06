import CalculatorContainer from 'containers/CalculatorContainer';
import 'index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<CalculatorContainer />, document.getElementById(
  'root',
) as HTMLElement);
registerServiceWorker();

import NavLinks from 'NavLinks';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <div>
          <NavLinks />
        </div>
      </Router>
    );
  }
}

export default App;

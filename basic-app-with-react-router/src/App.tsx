import Admin from 'Admin';
import Contact from 'Contact';
import NavLinks from 'NavLinks';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const Home = () => <h1>Home Component</h1>;
    const About = () => <h1>About Component</h1>;
    const Login = () => <h1>Login Component</h1>;

    return (
      <BrowserRouter>
        <div>
          <NavLinks />
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={Admin} />
            <Route path="/login" component={Login} />
            <Route render={() => <h1>404 Error</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

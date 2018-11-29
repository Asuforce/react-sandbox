import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

const ContactInfo = (props: any) => (
  <h1>Welcome to {props.match.params.location} office.</h1>
);

const Contact = (props: any) => (
  <div>
    <h1>Contact Component</h1>
    <div className="links">
      <NavLink to={`${props.match.url}/india`} className="link">
        India Office
      </NavLink>
      <NavLink to={`${props.match.url}/us`} className="link">
        Us Office
      </NavLink>
    </div>
    <Switch>
      <Route
        exact={true}
        path={props.match.url}
        render={() => <h4>Please select an office.</h4>}
      />
      <Route
        path={`${props.match.url}/:location(india|us)`}
        component={ContactInfo}
      />

      <Route render={() => <h2>No office found.</h2>} />
    </Switch>
  </div>
);

export default Contact;

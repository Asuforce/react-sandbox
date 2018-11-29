import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

const ContactIndia = () => <h1>Contact India</h1>;
const ContactUs = () => <h1>Contact Us</h1>;

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
      <Route path={`${props.match.url}/india`} component={ContactIndia} />
      <Route path={`${props.match.url}/us`} component={ContactUs} />

      <Route render={() => <h2>No office found.</h2>} />
    </Switch>
  </div>
);

export default Contact;

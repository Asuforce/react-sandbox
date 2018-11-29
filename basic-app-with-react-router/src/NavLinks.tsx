import * as React from 'react';
import { NavLink } from 'react-router-dom';
import 'scss/NavLinks.scss';

const NavLinks = () => (
  <div className="links">
    <NavLink exact={true} to="/" className="link" activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/about" className="link">
      About
    </NavLink>
    <NavLink to="/contact" className="link">
      Contact Us
    </NavLink>
    <NavLink to="/admin" className="link">
      Admin
    </NavLink>
  </div>
);

export default NavLinks;

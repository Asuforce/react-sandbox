import * as React from 'react';
import { Redirect } from 'react-router-dom';

const AppState = {
  loggedIn: false,
  login() {
    this.loggedIn = true;
  },
  logout() {
    this.loggedIn = false;
  },
};

const Admin = () =>
  AppState.loggedIn ? <h1>Admin Component</h1> : <Redirect to="/login" />;

export default Admin;

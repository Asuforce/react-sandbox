import * as React from 'react';
import { Redirect } from 'react-router-dom';

export const AppState = {
  loggedIn: false,
  login() {
    this.loggedIn = true;
  },
  logout() {
    this.loggedIn = false;
  },
};

interface AdminProps {
  history: any;
}

class Admin extends React.Component<AdminProps, {}> {
  constructor(props: any) {
    super(props);
  }

  logout = () => {
    AppState.logout();
    this.props.history.replace('/login');
  };

  render() {
    return AppState.loggedIn ? (
      <div>
        <h1>Admin Component</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default Admin;

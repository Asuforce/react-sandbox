import { AppState } from 'Admin';
import * as React from 'react';

interface LoginProps {
  history: any;
}

interface LoginStates {
  password: string;
}

class Login extends React.Component<LoginProps, LoginStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      password: '',
    };
  }

  savePassword = (e: any) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (this.state.password === 'password') {
      AppState.login();
      this.props.history.replace('/admin');
    } else {
      alert('Password is wrong');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h3>Please sign in</h3>
        <input
          type="password"
          placeholder="Type password"
          value={this.state.password}
          onChange={this.savePassword}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;

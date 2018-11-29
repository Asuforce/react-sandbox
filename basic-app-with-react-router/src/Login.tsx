import { AppState } from 'Admin';
import * as React from 'react';
import { Prompt } from 'react-router-dom';

interface LoginProps {
  history: any;
}

interface LoginStates {
  password: string;
  showProptOnNav: boolean;
}

class Login extends React.Component<LoginProps, LoginStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      password: '',
      showProptOnNav: false,
    };
  }

  savePassword = (e: any) => {
    this.setState({
      password: e.target.value,
      showProptOnNav: e.target.value.length > 0,
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
        <Prompt
          when={this.state.showProptOnNav}
          message="Are you sure? Your data will be lost."
        />
      </form>
    );
  }
}

export default Login;

import { AppState } from 'Admin';
import * as React from 'react';
import { Prompt } from 'react-router-dom';

interface LoginFormProps {
  history: any;
}

interface LoginFormStates {
  password: string;
  showProptOnNav: boolean;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormStates> {
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

export default LoginForm;

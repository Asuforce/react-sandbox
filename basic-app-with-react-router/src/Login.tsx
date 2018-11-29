import LoginForm from 'LoginForm';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

const Login = () => {
  const LoginFormWithProps = withRouter(LoginForm);

  return (
    <div>
      <h3>Please sign in</h3>
      <LoginFormWithProps />
    </div>
  );
};

export default Login;

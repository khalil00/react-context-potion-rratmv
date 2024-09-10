import * as React from 'react';
import LoginItem from './LoginItem';

const LoginForm = ({ availableUsers, onLogin }) => (
  <div className="row">
    {availableUsers.map((u) => (
      <LoginItem onClick={() => onLogin(u)} user={u} />
    ))}
  </div>
);

export default LoginForm;

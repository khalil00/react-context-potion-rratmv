import * as React from 'react';

const LoginItem = ({ user, onClick }) => (
  <div className="card col-4">
    <div className="card-body">
      <h5 className="card-title">{user.name}</h5>

      <button onClick={onClick} className="btn btn-primary">
        Login
      </button>
    </div>
  </div>
);

export default LoginItem;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from '../reducers/usersReducer';
import Button from './Button';

const LoginForm = () => {
  const dispatch = useDispatch();
  const toggleSignUp = useSelector((state) => state.toggle);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = ({ target }) => setUsername(target.value);
  const handlePasswordChange = ({ target }) => setPassword(target.value);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(setCurrentUser({ username, password }));
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ display: toggleSignUp ? 'none' : '' }}>
      <h2>Log in to application</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username
            <input
              onChange={handleUsernameChange}
              value={username}
              type="text"
              name="username"
              autoComplete="username"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={handlePasswordChange}
              value={password}
              type="password"
              name="password"
              autoComplete="currnt-password"
            />
          </label>
        </div>
        <Button label="log in" color="green" />
      </form>
    </div>
  );
};

export default LoginForm;

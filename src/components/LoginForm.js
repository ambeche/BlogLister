import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Typography } from '@material-ui/core';
import { setCurrentUser } from '../reducers/usersReducer';
import useStyles from '../styles/useStyles';

const LoginForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
      <Typography variant="h4" component="h4" className={classes.formTitle}>
        Log in to application
      </Typography>
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            onChange={handleUsernameChange}
            value={username}
            type="text"
            label="Username"
            name="username"
            autoComplete="username"
            required
          />
        </div>
        <div>
          <TextField
            onChange={handlePasswordChange}
            value={password}
            type="password"
            label="Password"
            name="password"
            autoComplete="currnt-password"
            required
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.formSubmitBtn}
        >
          log in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

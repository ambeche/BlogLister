import { TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/usersReducer';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [name, setName] = useState('');
  const [password, setPasswd] = useState('');

  const handleUserNameChange = ({ target }) => setUserName(target.value);
  const handleNameChange = ({ target }) => setName(target.value);
  const handlePasswdChange = ({ target }) => setPasswd(target.value);

  const handleUserRegistration = (event) => {
    event.preventDefault();
    dispatch(addUser({ username, name, password }));

    setUserName('');
    setName('');
    setPasswd('');
  };

  return (
    <div style={{ marginBottom: 5 }}>
      <Typography variant="h4" component="h4">
        Register
      </Typography>
      <form onSubmit={handleUserRegistration}>
        <div>
          <TextField
            onChange={handleUserNameChange}
            value={username}
            type="text"
            label="Username"
            name="userName"
            autoComplete="on"
            required
          />
        </div>

        <div>
          <TextField
            onChange={handleNameChange}
            value={name}
            type="text"
            label="Full name"
            name="name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <TextField
            onChange={handlePasswdChange}
            value={password}
            type="password"
            label="Password"
            name="passwd"
            autoComplete="password"
            required
          />
        </div>

        <Button type="submit" variant="contained">
          sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

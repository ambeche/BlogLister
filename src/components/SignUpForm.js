import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducers/usersReducer';
import Button from './Button';

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
      <h2>Register</h2>
      <form onSubmit={handleUserRegistration}>
        <div>
          <label>
            Username
            <input
              onChange={handleUserNameChange}
              value={username}
              type="text"
              name="userName"
              autoComplete="on"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name
            <input
              onChange={handleNameChange}
              value={name}
              type="text"
              name="name"
              autoComplete="name"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={handlePasswdChange}
              value={password}
              type="password"
              name="passwd"
              autoComplete="password"
              required
            />
          </label>
        </div>
        <Button label="Sign Up" color="green" id="add-user" />
      </form>
    </div>
  );
};

export default SignUpForm;

import loginService from '../services/login';
import blogService from '../services/blogs';
import userService from '../services/users';
import { notifyUser } from '../reducers/notificationReducer';
import { toggleOff } from './toggleReducer';

const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.currentUser };
    case 'SET_USERS':
      return { ...state, users: action.users };
    case 'LOGOUT_USER':
      return { ...state, currentUser: null };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.newUser] };
    default:
      return state;
  }
};

const setCurrentUser = (credentials) => {
  // sets logged in user with data from directly from the server or from local storage
  // if the user has already logged in.
  return async (dispatch) => {
    try {
      const currentUser = !credentials?.token
        ? await loginService.login(credentials)
        : null;

      if (currentUser)
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));

      blogService.setToken(currentUser?.token ?? credentials?.token);

      dispatch({
        type: 'SET_CURRENT_USER',
        currentUser: currentUser ?? credentials
      });
    } catch (err) {
      console.log('login error', err);
      dispatch(notifyUser(err?.response?.data?.error, 0));
    }
  };
};

const addUser = (newUserInfo) => {
  // Authenticates a new user upon successful registration

  return async (dispatch) => {
    try {
      const createdUser = await userService.createUser(newUserInfo);
      if (createdUser) {
        dispatch(
          setCurrentUser({
            username: createdUser.username,
            password: newUserInfo.password
          })
        );
        dispatch({
          type: 'ADD_USER',
          newUser: createdUser
        });
      }
    } catch (err) {
      console.log('sign up error', err);
      if (err?.response?.data?.error)
        dispatch(notifyUser(err?.response?.data?.error, 0));
    }
  };
};

const setUsers = () => {
  // sets redux store with all users data from the server

  return async (dispatch) => {
    try {
      const users = await userService.getUsers();
      dispatch({
        type: 'SET_USERS',
        users
      });
    } catch (err) {
      console.log('get users error', err);
    }
  };
};

const logoutUser = () => {
  return async (dispatch) => {
    await window.localStorage.removeItem('currentUser');
    dispatch({
      type: 'LOGOUT_USER'
    });
    dispatch(toggleOff());
  };
};

export {
  usersReducer as default,
  setCurrentUser,
  logoutUser,
  addUser,
  setUsers
};

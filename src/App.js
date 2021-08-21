import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Link, Route, useRouteMatch } from 'react-router-dom';
import DataList from './components/DataList';
import BlogForm from './components/BlogForm';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification';
import ToggleVisibility from './components/ToggleVisibility';
import SignUpForm from './components/SignUpForm';
import { setBlogs } from './reducers/blogsReducer';
import { setCurrentUser, logoutUser, setUsers } from './reducers/usersReducer';
import Blog from './components/Blog';
import User from './components/User';
import UserDetails from './components/UserDetails';
import BlogDetails from './components/BlogDetails';
import { Container, Typography } from '@material-ui/core';
import AppNav from './components/AppNav';

const App = () => {
  const dispatch = useDispatch();
  const [currentUser, users, blogs] = useSelector((state) => [
    state.users.currentUser,
    state.users.users,
    state.blogs
  ]);
  const matchedUser = useRouteMatch('/users/:id');
  const matchedBlog = useRouteMatch('/blogs/:id');
  const blogFormRef = useRef();

  useEffect(() => {
    // initializes the redux store with blogs users from the server
    dispatch(setBlogs());
    dispatch(setUsers());
  }, [dispatch]);

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem('currentUser');
    if (isLoggedIn) {
      dispatch(setCurrentUser(JSON.parse(isLoggedIn)));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const detailsToBeShown = (match, data) =>
    match && data.find((data) => data.id === match.params.id);

  if (!currentUser) {
    return (
      <Container>
        <Notification />
        <LoginForm />
        <ToggleVisibility labelOne="Sign in" labelTwo="Register">
          <SignUpForm />
        </ToggleVisibility>
      </Container>
    );
  }

  return (
    <Container>
      <AppNav currentUser={currentUser} handleLogout={handleLogout} />
      <Notification />

      <Typography variant="h4" component="h3">
        Bloging App
      </Typography>

      <ToggleVisibility
        ref={blogFormRef}
        labelOne="cancel"
        labelTwo="create blog"
      >
        <BlogForm toggleForm={blogFormRef} />
      </ToggleVisibility>
      <Switch>
        <Route path="/users/:id">
          <UserDetails user={detailsToBeShown(matchedUser, users)} />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails blog={detailsToBeShown(matchedBlog, blogs)} />
        </Route>
        <Route path="/users">
          <DataList type="users" sortby="numberOfBlogs">
            <User />
          </DataList>
        </Route>
        <Route path="/">
          <DataList type="blogs" sortby="likes">
            <Blog />
          </DataList>
        </Route>
      </Switch>
    </Container>
  );
};

export default App;

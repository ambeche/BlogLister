import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

const AppNav = ({ currentUser, handleLogout }) => {
  return (
    <AppBar position="stick">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          Blogs
        </Button>
        <Button component={Link} to="/users" color="inherit">
          Users
        </Button>
        {currentUser.name} is logged in
        <Button onClick={handleLogout} color="inherit">
          log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import useStyles from '../styles/useStyles';

const AppNav = ({ currentUser, handleLogout }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.desktopView}>
          <Typography
            className={classes.appName}
            variant="h6"
            noWrap
            color="inherit"
            component={Link}
            to="/"
          >
            Blogging App
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Blogs
          </Button>
          <Button component={Link} to="/users" color="inherit">
            Users
          </Button>
          <div className={classes.appBarEnd}>
            <IconButton color="inherit">
              <Button component="span" color="inherit">{currentUser.username}</Button>
              <AccountCircle />
            </IconButton>
            <Button onClick={handleLogout} color="inherit">
              log out
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;

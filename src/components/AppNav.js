import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../styles/useStyles';

const AppNav = ({ currentUser, handleLogout }) => {
  const classes = useStyles();
  // menue controlls and dom element to which the generated menu is attached to
  const [anchorElement, setAnchorElement] = useState(null);
  const [isDrawn, setDrawer] = useState(false);

  // current route path used for setting the selected or active app bar Tab
  const usersTabSelected = useRouteMatch('/users');
  const blogsTabSelected = useRouteMatch('/blogs');
  const defaultTab = useRouteMatch('/');

  const menuId = 'smView';

  const handleDrawerOpening = (event) => {
    setAnchorElement(event.currentTarget);
    setDrawer(true);
  };
  const handleDrawerClosing = () => {
    setAnchorElement(null);
    setDrawer(false);
  };

  const profile = () => (
    <IconButton color="inherit">
      <Button component="span" color="inherit">
        {currentUser.username}
      </Button>
      <AccountCircle />
    </IconButton>
  );
  const mobileViewDrawer = () => {
    return (
      <Menu
        anchorEl={anchorElement}
        open={isDrawn}
        onClose={handleDrawerClosing}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
      >
        <MenuItem component={Link} to="/" color="inherit">
          Blogs
        </MenuItem>
        <MenuItem component={Link} to="/users" color="inherit">
          Users
        </MenuItem>
        {profile()}
      </Menu>
    );
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            component="em"
            color="inherit"
            className={classes.menuIcon}
            onClick={handleDrawerOpening}
            aria-label="open drawer"
            aria-controls={menuId}
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
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
          <div className={classes.desktopView}>
            <Button
              className={
                (defaultTab.isExact ||
                  blogsTabSelected?.path?.includes('/blogs')) &&
                classes.appBarTab
              }
              component={Link}
              to="/"
              color="inherit"
            >
              Blogs
            </Button>
            <Button
              className={
                usersTabSelected?.path?.includes('/users') && classes.appBarTab
              }
              component={Link}
              to="/users"
              color="inherit"
            >
              Users
            </Button>
            <div className={classes.appBarEnd}>
              {profile()}
              <Button onClick={handleLogout} color="inherit">
                log out
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {mobileViewDrawer()}
    </>
  );
};

export default AppNav;

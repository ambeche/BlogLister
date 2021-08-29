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
  const [profileAnchorElement, setProfileAnchorElement] = useState(null);
  const [isDrawn, setDrawer] = useState(false);

  // current route path used for setting the selected or active app bar Tab
  const usersTabSelected = useRouteMatch('/users');
  const blogsTabSelected = useRouteMatch('/blogs');
  const profileTabSelected = useRouteMatch('/profile');
  const defaultTab = useRouteMatch('/');

  const menuId = 'smView';
  const profileMenuId = 'smProfile';

  const handleDrawerOpening = (event) => {
    setAnchorElement(event.currentTarget);
    setDrawer(true);
  };

  const handleDrawerClosing = () => {
    setAnchorElement(null);
    setDrawer(false);
  };

  const isProfileMenuDrawn = Boolean(profileAnchorElement);

  const handleProfileDrawerOpening = (event) => {
    setProfileAnchorElement(event.currentTarget);
  };
  const handleProfileDrawerClosing = () => {
    setProfileAnchorElement(null);
    handleDrawerClosing();
  };

  const profile = () => (
    <IconButton
      className={
        profileTabSelected?.path?.includes('/profile') && classes.appBarTab
      }
      component={Link}
      to="/profile"
      color="inherit"
    >
      <Button component="span" color="inherit">
        {currentUser.username}
      </Button>
      <AccountCircle />
    </IconButton>
  );
  const profileMenuMobile = () => (
    <Menu
      anchorEl={profileAnchorElement}
      open={isProfileMenuDrawn}
      onClose={handleProfileDrawerClosing}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={profileMenuId}
      keepMounted
    >
      <MenuItem
        onClick={handleProfileDrawerClosing}
        className={
          profileTabSelected?.path?.includes('/profile') && classes.appBarTab
        }
        component={Link}
        to="/profile"
        color="inherit"
      >
        My Account
      </MenuItem>
      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
    </Menu>
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
        <MenuItem
          onClick={handleDrawerClosing}
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
        </MenuItem>
        <MenuItem
          onClick={handleDrawerClosing}
          component={Link}
          className={
            usersTabSelected?.path?.includes('/users') && classes.appBarTab
          }
          to="/users"
          color="inherit"
        >
          Users
        </MenuItem>
        <MenuItem
          onClick={handleProfileDrawerOpening}
          aria-label="open profile menu drawer"
          aria-controls={profileMenuId}
          aria-haspopup="true"
        >
          <p>{currentUser.username}</p>
          <IconButton className={classes.menuItemProfile} color="inherit">
            <AccountCircle />
          </IconButton>
        </MenuItem>
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
      {profileMenuMobile()}
    </>
  );
};

export default AppNav;

import React from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import { AddCircle, Book, CommentRounded } from '@material-ui/icons';
import useStyles from '../styles/useStyles';
import Notification from './Notification';
import LoginForm from './LoginForm';
import ToggleVisibility from './ToggleVisibility';
import SignUpForm from './SignUpForm';
import Footer from './Footer';

const LoginOrRegister = () => {
  const classes = useStyles();
  return (
    <Container className={classes.app}>
      <div className={classes.loginOrRegisterContainer}>
        <div>
          <Typography  component="strong"> BlogLister</Typography>
          <List>
            <ListItem variant="body2">
              <Book className={classes.loginScreenIcons} />
              <ListItemText primary="Access interesting articles/blogs" />
            </ListItem>
            <ListItem variant="body2">
              <AddCircle className={classes.loginScreenIcons} />
              <ListItemText primary="Add and track your own blogs" />
            </ListItem>
            <ListItem variant="body2">
              <CommentRounded className={classes.loginScreenIcons} />
              <ListItemText primary="Share your thoughts on read blogs" />
            </ListItem>
          </List>
        </div>
        <Paper className={classes.loginOrRegister} elevation={3}>
          <Notification />
          <LoginForm />
          <ToggleVisibility labelOne="Sign in" labelTwo="Register">
            <SignUpForm />
          </ToggleVisibility>
        </Paper>
      </div>

      <Footer />
    </Container>
  );
};

export default LoginOrRegister;

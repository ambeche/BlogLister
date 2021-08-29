import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core';
import React from 'react';
import useStyles from '../styles/useStyles';

const Profile = ({ currentUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <List component={Paper} >
      <Divider />
        <ListItem>
          <ListItemText primary={`Welcome ${currentUser?.name}`} />
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
        </ListItem>
        <Divider />
      </List>
      <Typography variant="h6" component="h6">
        Your Basic Info
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Username" />
          <ListItemText align="right" secondary={currentUser?.username} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Total blogs added" />
          <ListItemText align="right" secondary={currentUser?.blogs?.length} />
        </ListItem>
      </List>
    </div>
  );
};

export default Profile;

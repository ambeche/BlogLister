import { ListItem, ListItemText, Divider, Tooltip } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ data }) => {
  const user = data;

  return (
    <>
      <Tooltip title="go to user details">
        <ListItem button component={Link} to={`/users/${user.id}`}>
          <ListItemText primary={user.name} />
          <ListItemText align="right" primary={user.blogs.length} />
        </ListItem>
      </Tooltip>
      <Divider />
    </>
  );
};

export default User;

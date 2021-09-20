import {
  Container,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import React from 'react';
import useStyles from '../styles/useStyles';

const UserDetails = ({ user }) => {
  const classes = useStyles();
  if (!user) return null;
  return (
    <Container className={classes.userDetails}>
      <Typography variant="h6" component="h5">
        {user.name}
      </Typography>
      <Divider />
      <Typography component="h6">Blogs Added by User</Typography>
      <List className={classes.scrollableBox}>
        {user.blogs.map((blog) => (
          <ListItem
            key={blog.id}
            button
            component={Link}
            href={blog.url}
            target="_blank"
          >
            {console.log(blog.url)}
            <ListItemText primary={blog.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserDetails;

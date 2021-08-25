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

const UserDetails = ({ user }) => {
  if (!user) return null;
  return (
    <Container>
      <Typography variant="h6" component="h6">
        {user.name}
      </Typography>
      <Divider />
      <Typography>Blogs Added by User</Typography>
      <List>
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

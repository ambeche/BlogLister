import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';

const Blog = ({ data }) => {
  const blog = data;

  return (
    <>
      <ListItem button component={Link} to={`/blogs/${blog.id}`}>
        <ListItemText primary={blog.title} secondary={blog.author} />
      </ListItem>
    </>
  );
};

export default Blog;

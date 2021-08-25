import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { notifyUser } from '../reducers/notificationReducer';
import { createNewBlog } from '../reducers/blogsReducer';
import { TextField, Typography, Button } from '@material-ui/core';
import useStyles from '../styles/useStyles';

const BlogForm = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const history = useHistory();

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleAuthorChange = ({ target }) => setAuthor(target.value);
  const handleUrlChange = ({ target }) => setUrl(target.value);

  const handleBlogCreation = (event) => {
    event.preventDefault();
    toggleForm.current.toggleVisibility();
    // dispatches the newly created blog to redux store
    dispatch(createNewBlog({ title, author, url }));
    dispatch(notifyUser(`A new blog '${title}' has been added!`, 1));
    setTitle('');
    setAuthor('');
    setUrl('');
    history.push('/');
  };

  return (
    <div style={{ marginBottom: 5 }}>
      <Typography variant="h6" component="h6">
        Create New Blog
      </Typography>
      <form onSubmit={handleBlogCreation}>
        <div>
          <TextField
            onChange={handleTitleChange}
            value={title}
            type="text"
            label="Title"
            name="title"
            autoComplete="on"
            required
          />
        </div>

        <div>
          <TextField
            onChange={handleAuthorChange}
            value={author}
            type="text"
            label="Author"
            name="author"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <TextField
            onChange={handleUrlChange}
            value={url}
            type="url"
            label="Url"
            name="url"
            autoComplete="url"
            required
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.formSubmitBtn}
        >
          add blog
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;

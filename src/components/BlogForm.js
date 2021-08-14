import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { notifyUser } from '../reducers/notificationReducer';
import { createNewBlog } from '../reducers/blogsReducer';

const BlogForm = ({ toggleForm }) => {
  const dispatch = useDispatch();
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
      <h2>Create New Blog</h2>
      <form onSubmit={handleBlogCreation}>
        <div>
          <label>
            Title
            <input
              onChange={handleTitleChange}
              value={title}
              type="text"
              name="title"
              autoComplete="on"
            />
          </label>
        </div>
        <div>
          <label>
            Author
            <input
              onChange={handleAuthorChange}
              value={author}
              type="text"
              name="author"
              autoComplete="name"
            />
          </label>
        </div>
        <div>
          <label>
            Url
            <input
              onChange={handleUrlChange}
              value={url}
              type="url"
              name="url"
              autoComplete="url"
            />
          </label>
        </div>
        <Button label="create" color="green" id="post-blog" />
      </form>
    </div>
  );
};

export default BlogForm;

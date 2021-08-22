import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentOnBlog } from '../reducers/blogsReducer';

const CommentForm = ({ blogId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const handleContentChange = ({ target }) => setContent(target.value);

  const addComment = (event) => {
    event.preventDefault();
    dispatch(commentOnBlog({ content }, blogId));
    setContent('');
  };

  return (
    <div>
      <form onSubmit={addComment}>
        <div>
          <TextField
            onChange={handleContentChange}
            value={content}
            type="text"
            label="enter comment"
            name="comment"
            required
            variant="filled"
            size="small"
          />
          <Button variant="contained" type="submit" size="small">
            add comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;

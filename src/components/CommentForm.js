import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentOnBlog } from '../reducers/blogsReducer';
import useStyles from '../styles/useStyles';

const CommentForm = ({ blogId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [content, setContent] = useState('');
  const handleContentChange = ({ target }) => setContent(target.value);

  const addComment = (event) => {
    event.preventDefault();
    dispatch(commentOnBlog({ content }, blogId));
    setContent('');
  };

  return (
    <div className={classes.commentForm}>
      <form onSubmit={addComment}>
        <div>
          <TextField
            onChange={handleContentChange}
            value={content}
            type="text"
            label="comment"
            id="enter comment"
            name="comment"
            required
            variant="outlined"
            size="small"
            multiline
          />
          <Button
            variant="outlined"
            type="submit"
            size="small"
            color="primary"
          >
            add comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { commentOnBlog } from '../reducers/blogsReducer';
import Button from './Button';

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
          <input
            onChange={handleContentChange}
            value={content}
            type="text"
            name="username"
            required
            placeholder="enter your comment"
          />
          <Button label="Add Comment" color="green" />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;

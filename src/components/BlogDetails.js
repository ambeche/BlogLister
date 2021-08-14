import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { modifyBlog, deleteBlog } from '../reducers/blogsReducer';
import { Link } from 'react-router-dom';
import Button from './Button';
import CommentForm from './CommentForm';

const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const history = useHistory();

  const likeBlog = () => {
    dispatch(
      modifyBlog({ ...blog, user: blog?.user?.id, likes: (blog.likes += 1) })
    );
    window.location.reload();
  };

  const handleBlogDeletion = () => {
    if (window.confirm(`Remove blog '${blog?.title}' by ${blog?.author}`)) {
      dispatch(deleteBlog(blog?.id));
      history.push('/');
    }
  };
  const commentsOnBlog = () =>
    blog?.comments?.map((cmt) => (
      <ul key={cmt.id}>
        <li>{cmt.content}</li>
      </ul>
    ));

  const toggleDeleteButton = () => {
    if (blog?.user?.username === currentUser.username) {
      console.log('user', currentUser);
      console.log('user2', blog.user);

      return (
        <Button
          handleClick={handleBlogDeletion}
          label="delete"
          id="delete-blog"
          color="#f44336"
        />
      );
    }
  };

  if (!blog) return null;

  return (
    <div>
      <h2>
        {' '}
        {blog.title}, {blog.author}
      </h2>
      <h4>
        {' '}
        <Link to={{ pathname: blog.url }} target="_blank">
          {blog.url}
        </Link>{' '}
      </h4>
      <ul>
        <li>
          likes <span id="num-of-likes">{blog.likes}</span>
        </li>
        <li>added by {blog.user?.name} </li>
      </ul>
      <div>
        <Button
          handleClick={likeBlog}
          label="like"
          color="green"
          id="like-blog"
        />
        {toggleDeleteButton()}
      </div>
      <h3>Comments</h3>
      <CommentForm blogId={blog.id} />
      {commentsOnBlog()}
    </div>
  );
};

export default BlogDetails;

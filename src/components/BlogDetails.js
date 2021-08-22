import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { modifyBlog, deleteBlog } from '../reducers/blogsReducer';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Container
} from '@material-ui/core';
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
      <ListItem dense key={cmt.id} component="div">
        <ListItemText primary={cmt.content} />
      </ListItem>
    ));

  const toggleDeleteButton = () => {
    if (blog?.user?.username === currentUser.username) {
      console.log('user', currentUser);
      console.log('user2', blog.user);

      return (
        <Button onClick={handleBlogDeletion} variant="contained">
          delete
        </Button>
      );
    }
  };

  if (!blog) return null;

  return (
    <Container component="div">
      <List>
        <ListItem>
          <ListItemText
            primary={`${blog.title}, ${blog.author}`}
            secondary={`added by ${blog.user?.name}`}
          />
          <ListItemSecondaryAction>
            <Button
              component={Link}
              to={{ pathname: blog.url }}
              target="_blank"
            >
              go to article
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Number of Likes" secondary={blog.likes} />
          <ListItemSecondaryAction>
            <Button onClick={likeBlog} variant="contained">
              like
            </Button>
            {toggleDeleteButton()}
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </List>
      <div>
        <Typography variant="h6" component="h6">
          Comments
        </Typography>
        <CommentForm blogId={blog.id} />
        {commentsOnBlog()}
      </div>
    </Container>
  );
};

export default BlogDetails;

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
import { DeleteOutline, FavoriteBorderOutlined } from '@material-ui/icons';
import useStyles from '../styles/useStyles';

const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const classes = useStyles();
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
        <Button
          onClick={handleBlogDeletion}
          size="small"
          color="secondary"
          startIcon={<DeleteOutline fontSize="small" />}
        >
          delete
        </Button>
      );
    }
  };

  if (!blog) return null;

  const secondaryActions = () => {
    return (
      <>
        <Button
          onClick={likeBlog}
          color="secondary"
          size="small"
          startIcon={<FavoriteBorderOutlined fontSize="small" />}
        >
          like
        </Button>
        {toggleDeleteButton()}
      </>
    );
  };

  const linkToBlog = () => (
    <Button
      component={Link}
      to={{ pathname: blog.url }}
      target="_blank"
      color="primary"
      variant="outlined"
    >
      read
    </Button>
  );

  return (
    <Container component="div">
      <List>
        <ListItem>
          <ListItemText
            primary={`${blog.title}, ${blog.author}`}
            secondary={`added by ${blog.user?.name}`}
            className={classes.listItemPrimary}
          />
          <ListItemSecondaryAction
            className={classes.listSecondaryActionsDesktop}
          >
            {linkToBlog()}
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Number of Likes" secondary={blog.likes} />
          <ListItemSecondaryAction
            className={classes.listSecondaryActionsDesktop}
          >
            {secondaryActions()}
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className={classes.listSecondaryActionsMobile}>
          {linkToBlog()}
          {secondaryActions()}
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

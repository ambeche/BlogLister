import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { modifyBlog, deleteBlog } from '../reducers/blogsReducer';
import { Link } from 'react-router-dom';
import {
  Button,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
  Container
} from '@material-ui/core';
import CommentForm from './CommentForm';
import {
  DeleteOutline,
  Favorite,
  FavoriteBorderOutlined
} from '@material-ui/icons';
import useStyles from '../styles/useStyles';
import styles from '../styles/BlogDetails.module.css';
import helpers from './utils/helpers';

const BlogDetails = ({ blog }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const classes = useStyles();
  const history = useHistory();

  const likes = blog?.likes.value + 1;
  const likeBlog = () => {
    dispatch(modifyBlog({ ...blog, likes: { value: likes } }));
  };

  const handleBlogDeletion = () => {
    if (window.confirm(`Remove blog '${blog?.title}' by ${blog?.author}`)) {
      dispatch(deleteBlog(blog?.id));
      history.push('/');
    }
  };
  const commentsOnBlog = () =>
    blog?.comments?.map((cmt) => {
      return (
        <ListItem
          dense
          key={cmt.id}
          component="div"
          className={`${classes.commentContainer} ${classes.roundedCornersBox}`}
        >
          <ListItemText
            primary={cmt.content}
            className={classes.commentText}
            secondary={helpers.dateFormater(cmt)}
          />
        </ListItem>
      );
    });

  const toggleDeleteButton = () => {
    if (blog?.user?.username === currentUser.username) {
      return (
        <Button
          onClick={handleBlogDeletion}
          size="small"
          startIcon={<DeleteOutline fontSize="small" />}
          className={classes.secondaryActionBtn}
        >
          delete
        </Button>
      );
    }
  };

  if (!blog) return null;

  const secondaryActions = () => {
    // checks if blog has already been liked by the current user
    const isLiked = blog.likes.users.some(
      (liker) => liker.liker === currentUser.id && liker.isLiked
    );
    console.log('like', blog.likes.users);
    console.log('cuser', currentUser.id);

    return (
      <>
        <Button
          onClick={likeBlog}
          size="small"
          startIcon={
            isLiked ? (
              <Favorite fontSize="small" className={classes.isLiked} />
            ) : (
              <FavoriteBorderOutlined fontSize="small" />
            )
          }
          className={classes.secondaryActionBtn}
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
          <ListItemText
            primary="Number of Likes"
            secondary={blog.likes.value}
          />
          <ListItemSecondaryAction
            className={classes.listSecondaryActionsDesktop}
          >
            {secondaryActions()}
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          className={`${classes.listSecondaryActionsMobile} ${styles.xxsmall}`}
        >
          {linkToBlog()}
          {secondaryActions()}
        </ListItem>
      </List>
      <div className={`${classes.commentSection} ${classes.roundedCornersBox}`}>
        <Typography variant="h6" component="h6">
          Comments
        </Typography>
        <CommentForm blogId={blog.id} />
        <List
          className={`${classes.commentListContainer} ${classes.scrollableBox}`}
        >
          {commentsOnBlog()}
        </List>
      </div>
    </Container>
  );
};

export default BlogDetails;

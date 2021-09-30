import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper,
  Typography,
  Grid,
  Badge,
  IconButton,
  Tooltip
} from '@material-ui/core';
import useStyles from '../styles/useStyles';
import {
  Bookmark,
  BookmarkBorderOutlined,
  CommentRounded
} from '@material-ui/icons';
import { bookmarkBlog } from '../reducers/blogsReducer';
import { useDispatch } from 'react-redux';

const Blog = ({ data, currentUser }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const blog = data;

  const addToReadingList = () => dispatch(bookmarkBlog(blog.id));

  const isBookmarked = blog.reads?.includes(currentUser?.id);

  return (
    <Paper className={classes.blogCard}>
      <div className={classes.blogContentContainer}>
        <Grid
          container
          component={Link}
          to={`/blogs/${blog?.id}`}
          className={classes.blogContent}
        >
          <Grid item xs={12} sm={4} className={classes.blogMedia}>
            <img src={blog?.linkPreview?.image} alt={blog?.title} />
          </Grid>

          <Grid item xs={12} sm={8} className={classes.blogContentText}>
            <Typography variant="h6">{blog?.title} </Typography>
            <Typography
              variant="body2"
              className={classes.blogContentDescription}
            >
              {blog?.linkPreview?.description}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.blogCardSecondaryActions}>
        {
          <IconButton component={Link} to={`/blogs/${blog?.id}`}>
            <Badge
              badgeContent={blog?.numberOfComments}
              className={classes.commentBadge}
            >
              <CommentRounded
                className={classes.bookmarkIcon}
                fontSize="small"
              />
            </Badge>
          </IconButton>
        }
        {isBookmarked ? (
          <Tooltip title="remove from your list">
            <IconButton onClick={addToReadingList}>
              <Bookmark className={classes.bookmarkIcon} />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="save to reading list">
            <IconButton onClick={addToReadingList}>
              <BookmarkBorderOutlined className={classes.bookmarkIcon} />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Paper>
  );
};

export default Blog;

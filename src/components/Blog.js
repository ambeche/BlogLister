import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Grid } from '@material-ui/core';
import useStyles from '../styles/useStyles';

const Blog = ({ data }) => {
  const classes = useStyles();
  const blog = data;

  return (
    <Paper className={classes.blogCard}>
      <Grid
        container item
        component={Link}
        to={`/blogs/${blog?.id}`}
        className={classes.blogContent}
      >
        <Grid item xs={12} sm={4}>
          <img
            src={blog?.linkPreview?.image}
            alt={blog?.title}
            className={classes.blogMedia}
          />
        </Grid>

        <Grid item xs={12} sm={8} className={classes.blogContentText} >
          <Typography variant="h6">{blog?.title} </Typography>
          <Typography variant="body1" className={classes.blogContentDescription}>
            {blog?.linkPreview?.description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Blog;

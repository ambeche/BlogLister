import { InputAdornment, InputBase, Paper, Tooltip } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import useStyles from '../styles/useStyles';

const BlogSearcher = ({ searchWords, handleSearch }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.searchBox}>
        <InputBase
          onChange={handleSearch}
          value={searchWords}
          className={classes.searchInput}
          type="search"
          placeholder="search by title, author or keywords"
          inputProps={{ 'arial-label': 'search blogs by title or author' }}
          id="filter"
          name="filter"
        />
        <SearchOutlined className={classes.searchIcon} />
    </Paper>
  );
};

export default BlogSearcher;

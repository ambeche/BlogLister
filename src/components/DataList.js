// Reusable component for sorting and rendering a List of data
// it receives children components as props.children
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import useStyles from '../styles/useStyles';
import { Typography } from '@material-ui/core';
import BlogSearcher from './BlogSearcher';

const DataList = ({ type, sortby, scroll, children }) => {
  const classes = useStyles({ maxHeight: '60em' });
  const [searchWords, setSearchWords] = useState('');

  // search logic for filtering blogs by search parameters
  const blogsWithSearchOption = (blogs) =>
    searchWords
      ? blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(searchWords.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchWords.toLowerCase()) ||
            blog.user.name.toLowerCase().includes(searchWords.toLowerCase())
        )
      : blogs;

  const dataList = useSelector((state) => {
    const data =
      type === 'users' ? state[type][type] : blogsWithSearchOption(state[type]);
    return data
      .sort(
        (a, b) => a[sortby] - (type === 'users' ? b.blogs.length : b[sortby])
      )
      .reverse();
  });

  // spinner is implemented here so that other parts of app, like appbar and footer
  // can be rendered while waiting for data from the server to be loaded
  if (!dataList.length && !searchWords) return <Spinner />;

  const handleSearch = ({ target }) => setSearchWords(target.value);

  return (
    <div>
      {scroll && (
        <div className={classes.searchBar}>
          <Typography variant="h6"> Blogs</Typography>
          <BlogSearcher searchWords={searchWords} handleSearch={handleSearch} />
        </div>
      )}
      <div className={scroll && classes.scrollableBox}>
        <div className={scroll && classes.blogGrid}>
          {dataList?.map((data) =>
            // This approach is used instead of {props.children} because of the additional
            // props that are required to be passed to the child by this parent component.
            // The child component is accessed and its clone is returned with newly passed props
            React.Children.map(children, (child) =>
              React.cloneElement(child, { data, key: data.id })
            )
          )}
        </div>
      </div>
    </div>
  );
};

DataList.propTypes = {
  type: PropTypes.string.isRequired,
  sortby: PropTypes.string.isRequired
};

export default DataList;

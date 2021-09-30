// Reusable component for sorting and rendering a List of data
// it receives children components as props.children
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import useStyles from '../styles/useStyles';
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import BlogSearcher from './BlogSearcher';
import { MoreVert } from '@material-ui/icons';
import { searchOptions } from './utils/constants';

const DataList = ({
  type,
  sortby,
  scroll,
  currentUser,
  reads,
  searchBarOff,
  children
}) => {
  const classes = useStyles({ maxHeight: '60em' });
  const [searchWords, setSearchWords] = useState('');
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);

  // filters all blogs bookmarked by the current user into a reading list
  // in the user's profile
  const blogsOrReadingList = (blogs) => {
    const readingList = blogs.filter((blog) =>
      blog.reads.includes(currentUser?.id)
    );
    return reads
      ? readingList
      : currentUser?.isAddedbyCurrentUser
      ? [...currentUser?.blogs]
      : blogs;
  };

  // search logic for filtering blogs by search parameters
  const blogsWithSearchOption = (blogs) =>
    searchWords
      ? blogs.filter(
          (blog) =>
            blog.title.toLowerCase().includes(searchWords.toLowerCase()) ||
            blog.author.toLowerCase().includes(searchWords.toLowerCase()) ||
            blog.user.name.toLowerCase().includes(searchWords.toLowerCase()) ||
            blog.topics.some((topic) => topic === searchWords.toLowerCase())
        )
      : blogsOrReadingList(blogs);

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
  const open = Boolean(moreAnchorEl);
  const handleSearchOptionsOpening = (event) =>
    setMoreAnchorEl(event.currentTarget);
  const handleSearchOptionsClosing = () => setMoreAnchorEl(null);

  const filterByTopic = (topic) => {
    !(topic === searchOptions[0]) && setSearchWords(topic);
    handleSearchOptionsClosing();
  };

  // menu for filtering blogs based on topics
  const searchOptionsMenu = () => {
    return (
      <Menu
        anchorEl={moreAnchorEl}
        open={open}
        onClose={handleSearchOptionsClosing}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="TOPICS"
        keepMounted
        className={classes.searchMenu}
      >
        {searchOptions.map((topic) => {
          const subtitle = topic === searchOptions[0];
          return (
            <MenuItem
              key={topic}
              onClick={() => filterByTopic(topic)}
              className={(subtitle && classes.searchOptionsTitle) || ''}
            >
              {(subtitle && (
                <Typography variant="subtitle1" component="h6">
                  {topic}
                </Typography>
              )) ||
                topic}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };

  const searchBar = () => {
    //excludes the search bar from the user's reading list in the profile view
    if (scroll && !searchBarOff) {
      return (
        <div className={classes.searchBar}>
          <Typography variant="h6"> Blogs</Typography>
          <IconButton
            className={classes.searchBarMoreIcon}
            onClick={handleSearchOptionsOpening}
            arial-label="more filters"
            arial-haspopup="true"
          >
            <MoreVert />
          </IconButton>
          <BlogSearcher searchWords={searchWords} handleSearch={handleSearch} />
        </div>
      );
    }
  };

  return (
    <div>
      {searchBar()}
      <div className={scroll && classes.scrollableBox}>
        <div className={scroll && classes.blogGrid}>
          {dataList?.map((data) =>
            // This approach is used instead of {props.children} because of the additional
            // props that are required to be passed to the child by this parent component.
            // The child component is accessed and its clone is returned with newly passed props
            React.Children.map(children, (child) =>
              React.cloneElement(child, { data, currentUser, key: data.id })
            )
          )}
        </div>
      </div>
      {searchOptionsMenu()}
    </div>
  );
};

DataList.propTypes = {
  type: PropTypes.string.isRequired,
  sortby: PropTypes.string.isRequired
};

export default DataList;

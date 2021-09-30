import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { createNewBlog } from '../reducers/blogsReducer';
import {
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../styles/useStyles';
import { toggleOff } from '../reducers/toggleReducer';
import { inititialState } from './utils/constants';

const BlogForm = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [topics, setTopics] = useState({ ...inititialState });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleAuthorChange = ({ target }) => setAuthor(target.value);
  const handleUrlChange = ({ target }) => setUrl(target.value);
  const handleChecking = ({ target }) => {
    setTopics({ ...topics, [target.name]: target.checked });
  };

  const handleBlogCreation = (event) => {
    event.preventDefault();
    const checkedValues = Object.values(topics);

    if (checkedValues.includes(true)) {
      setError(false);
      const checkedTopics = Object.keys(topics).filter(
        (topic, i) => Boolean(checkedValues[i]) && topic
      );
      console.log('checked topics', checkedTopics);

      toggleForm.current.toggleVisibility();
      // dispatches the newly created blog to redux store
      dispatch(createNewBlog({ title, author, url, topics: checkedTopics }));

      setTopics(inititialState);
      setTitle('');
      setAuthor('');
      setUrl('');
      dispatch(toggleOff());
      history.push('/');
    } else setError(true);
  };

  return (
    <div style={{ marginBottom: 5 }}>
      <Typography variant="h6" component="h6" className={classes.formTitle}>
        Add an Article or Write your own Story
      </Typography>
      <form onSubmit={handleBlogCreation} className={classes.forms}>
        <div>
          <TextField
            onChange={handleTitleChange}
            value={title}
            type="text"
            label="Title"
            id="Title"
            name="title"
            autoComplete="on"
            required
            variant="outlined"
            multiline
          />
        </div>
        <div className={classes.blogTopicsInput}>
          <Typography variant="subtitle2" component="p">
            Select all Topics that apply to the above title of your article*
          </Typography>
          {error && (
            <FormHelperText error>
              at least one topic should be selected
            </FormHelperText>
          )}
          <div
            className={`${classes.blogTopicsCheckBoxes} ${classes.roundedCornersBox}`}
          >
            <FormControlLabel
              className={`${
                topics['software engineering'] ? classes.checkedBoxLabel : ''
              } ${classes.checkBoxLabel}`}
              control={
                <Checkbox
                  checked={topics['software engineering']}
                  onChange={handleChecking}
                  name="software engineering"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="software engineering"
            />
            <FormControlLabel
              className={`${topics.sciences ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.sciences}
                  onChange={handleChecking}
                  name="sciences"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="sciences"
            />
            <FormControlLabel
              className={`${topics.health ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.health}
                  onChange={handleChecking}
                  name="health"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="health"
            />
            <FormControlLabel
              className={`${topics.arts ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.arts}
                  onChange={handleChecking}
                  name="arts"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="arts"
            />
            <FormControlLabel
              className={`${topics.politics ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.politics}
                  onChange={handleChecking}
                  name="politics"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="politics"
            />
            <FormControlLabel
              className={`${topics.education ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.education}
                  onChange={handleChecking}
                  name="education"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="education"
            />
            <FormControlLabel
              className={`${topics.religion ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.religion}
                  onChange={handleChecking}
                  name="religion"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="religion"
            />
            <FormControlLabel
              className={`${topics.business ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.business}
                  onChange={handleChecking}
                  name="business"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="business"
            />
            <FormControlLabel
              className={`${topics.android ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.android}
                  onChange={handleChecking}
                  name="android"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="android"
            />
            <FormControlLabel
              className={`${
                topics['web development'] ? classes.checkedBoxLabel : ''
              } ${classes.checkBoxLabel}`}
              control={
                <Checkbox
                  checked={topics['web development']}
                  onChange={handleChecking}
                  name="web development"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="web development"
            />
            <FormControlLabel
              className={`${
                topics['mobile development'] ? classes.checkedBoxLabel : ''
              } ${classes.checkBoxLabel}`}
              control={
                <Checkbox
                  checked={topics['mobile development']}
                  onChange={handleChecking}
                  name="mobile development"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="mobile development"
            />
            <FormControlLabel
              className={`${
                topics['beauty-fashion'] ? classes.checkedBoxLabel : ''
              } ${classes.checkBoxLabel}`}
              control={
                <Checkbox
                  checked={topics['beauty-fashion']}
                  onChange={handleChecking}
                  name="beauty-fashion"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="beauty-fashion"
            />
            <FormControlLabel
              className={`${topics.general ? classes.checkedBoxLabel : ''} ${
                classes.checkBoxLabel
              }`}
              control={
                <Checkbox
                  checked={topics.general}
                  onChange={handleChecking}
                  name="general"
                  icon={<span className={classes.checkBoxIcon} />}
                  checkedIcon={<span className={classes.checkBoxIcon} />}
                />
              }
              label="general"
            />
          </div>
        </div>
        <div>
          <TextField
            onChange={handleAuthorChange}
            value={author}
            type="text"
            label="Author"
            id="Author"
            name="author"
            autoComplete="name"
            required
            variant="outlined"
            multiline
          />
        </div>

        <div>
          <TextField
            onChange={handleUrlChange}
            value={url}
            type="url"
            label="Url"
            id="Url"
            name="url"
            autoComplete="url"
            required
            variant="outlined"
            multiline
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          color="primary"
          className={classes.formSubmitBtn}
        >
          add blog
        </Button>
      </form>
    </div>
  );
};

export default BlogForm;

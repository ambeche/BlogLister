import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { createNewBlog } from '../reducers/blogsReducer';
import {
  TextField,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from '@material-ui/core';
import useStyles from '../styles/useStyles';
import { toggleOff } from '../reducers/toggleReducer';

const BlogForm = ({ toggleForm }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [topics, setTopics] = useState({
    'software development': false,
    sciences: false,
    health: false,
    arts: false,
    politics: false,
    education: false,
    religion: false,
    business: false,
    'beauty-fashion': false
  });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleTitleChange = ({ target }) => setTitle(target.value);
  const handleAuthorChange = ({ target }) => setAuthor(target.value);
  const handleUrlChange = ({ target }) => setUrl(target.value);
  const handleChecking = ({ target }) => {
    setTopics({ ...topics, [target.name]: target.checked });
    console.log('topics', topics);
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
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics['software development']}
                  onChange={handleChecking}
                  name="software development"
                />
              }
              label="software development"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.sciences}
                  onChange={handleChecking}
                  name="sciences"
                />
              }
              label="sciences"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.health}
                  onChange={handleChecking}
                  name="health"
                />
              }
              label="health"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.arts}
                  onChange={handleChecking}
                  name="arts"
                />
              }
              label="arts"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.politics}
                  onChange={handleChecking}
                  name="politics"
                />
              }
              label="politics"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.education}
                  onChange={handleChecking}
                  name="education"
                />
              }
              label="education"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.religion}
                  onChange={handleChecking}
                  name="religion"
                />
              }
              label="religion"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics.business}
                  onChange={handleChecking}
                  name="business"
                />
              }
              label="business"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={topics['beauty-fashion']}
                  onChange={handleChecking}
                  name="beauty-fashion"
                />
              }
              label="beauty-fashion"
            />
          </FormGroup>
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

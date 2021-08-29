import React, { useState, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleOff, toggleOn } from '../reducers/toggleReducer';
import { Button } from '@material-ui/core';
import useStyles from '../styles/useStyles';

const ToggleVisibility = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.toggle);
  const classes = useStyles();

  const hideOrShow = { display: visible ? '' : 'none' };
  const label = visible ? props.labelOne : props.labelTwo;

  const toggleVisibility = () => {
    if (label)
      label === 'Sign in' || label === 'cancel'
        ? dispatch(toggleOff())
        : dispatch(toggleOn());
  };

  useImperativeHandle(ref, () => ({ toggleVisibility }));

  return (
    <div className={classes.formsContainerComponent}>
      <div style={hideOrShow}>{props.children}</div>
      <Button onClick={toggleVisibility} color="secondary">{label}</Button>
    </div>
  );
});

ToggleVisibility.displayName = 'ToggleVisibility';

ToggleVisibility.propTypes = {
  labelOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired
};

export default ToggleVisibility;

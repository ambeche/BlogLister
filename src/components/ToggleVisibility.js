import React, { useState, useImperativeHandle } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleOff, toggleOn } from '../reducers/toggleReducer';
import { Button } from '@material-ui/core';

const ToggleVisibility = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);

  const hideOrShow = { display: visible ? '' : 'none' };
  const label = visible ? props.labelOne : props.labelTwo;

  const toggleVisibility = () => {
    if (label === 'Sign in' || label === 'Register')
      label === 'Register' ? dispatch(toggleOn()) : dispatch(toggleOff());
    setVisibility(!visible);
  };

  useImperativeHandle(ref, () => ({ toggleVisibility }));

  return (
    <div>
      <div style={hideOrShow} className="hideOrShow">
        {props.children}
      </div>
      <Button onClick={toggleVisibility} >
        {label}
      </Button>
    </div>
  );
});

ToggleVisibility.displayName = 'ToggleVisibility';

ToggleVisibility.propTypes = {
  labelOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
};

export default ToggleVisibility;

import React from 'react';
import { Button as MuiButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const Button = ({ marginBottom, color, label, id, className, handleClick }) => {
  const buttonStyle = {
    borderRadius: 4,
    borderColor: 'white',
    backgroundColor: color,
    textDecoration: 'none',
    color: '#ffffff',
    marginBottom: marginBottom
  };
  return (
    <>
      <MuiButton
        style={buttonStyle}
        onClick={handleClick}
        id={id}
        className={className}
      >
        {label}
      </MuiButton>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  marginBottom: PropTypes.number,
  id: PropTypes.string
};
export default Button;

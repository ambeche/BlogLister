const toggleReducer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE':
    return true;
  case 'RESET_TOGGLE':
    return false;
  default:
    return state;
  }
};

const toggleOn = () => {
  return {
    type: 'TOGGLE'
  };
};

const toggleOff = () => {
  return {
    type: 'RESET_TOGGLE'
  };
};

export { toggleReducer as default, toggleOn, toggleOff };

const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_NOTICE':
    return { ...action };
  case 'RESET_NOTICE':
    return null;
  default:
    return state;
  }
};

export const notifyUser = (message, code) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTICE',
      message,
      code
    });

    await new Promise(() => {
      setTimeout(() => {
        dispatch({
          type: 'RESET_NOTICE'
        });
      }, 5000);
    });
  };
};

export default notificationReducer;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide
} from '@material-ui/core';
import React from 'react';
import useStyles from '../styles/useStyles';

const DialogTransition = React.forwardRef((props, ref) => (
  <Slide ref={ref} {...props} direction="right" />
));

const MainModal = ({ children, title, open, closeDialog }) => {
  const classes = useStyles();
  return (
    <div className={classes.dialogContainer}>
      <Dialog
        keepMounted
        aria-labelledby={title}
        TransitionComponent={DialogTransition}
        open={open}
        onClose={closeDialog}
        className={classes.dialog}
        maxWidth={false}
      >
        <DialogTitle className={classes.dialogTitle} >{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={closeDialog}>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogTransition.displayName = 'DialogTransition';

export default MainModal;

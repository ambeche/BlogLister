import { CircularProgress, Container } from '@material-ui/core';
import React from 'react';

const Spinner = () => {
  return (
    <Container>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </Container>
  );
};

export default Spinner;

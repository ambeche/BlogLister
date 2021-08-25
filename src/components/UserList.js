import React from 'react';
import User from './User';
import DataList from './DataList';
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Typography,
  Paper
} from '@material-ui/core';

const UserList = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> <Typography component="h6" variant="h6" >Users</Typography></TableCell>
          <TableCell align="right"> <Typography component="h6" variant="h6" >Blogs Added</Typography></TableCell>
        </TableRow>
      </TableHead>
    </Table>
    <DataList type="users" sortby="numberOfBlogs">
      <User />
    </DataList>
  </TableContainer>
);

export default UserList;

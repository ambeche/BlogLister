import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({ data }) => {
  const user = data;
  const style = {
    paddingTop: 10,
    paddingLeft: 2,
    marginBottom: 5,
    width: '20%'
  };
  const itemStyle = { padding: 5 };

  return (
    <div style={style}>
      <span style={itemStyle}>
        <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
      </span>
      <span style={{ ...itemStyle, textAlign: 'center', float: 'right' }}>
        {user.blogs.length}
      </span>
    </div>
  );
};

export default User;

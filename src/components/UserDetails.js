import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) return null;
  return (
    <div>
      <h2> {user.name} </h2>
      <h4> Added Blogs</h4>
      <ul>
        {user.blogs.map((blog) => (
          <li key={user.id}> {blog.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;

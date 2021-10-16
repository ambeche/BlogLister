import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notice = useSelector((state) => state.notice);
  if (notice === null) return null;

  const messageStyle = {
    color: notice.code ? 'green' : 'red',
    fontSize: 26,
    padding: 5,
    border: '0.1em solid',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F0F0F0'
  };

  return (
    <div className="notice" style={messageStyle}>
      {notice.message}
    </div>
  );
};

export default Notification;

// Reusable component for sorting and rendering a List of data
// it receives children components as props.children
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const DataList = ({ type, sortby, children }) => {
  const dataList = useSelector((state) => {
    const data = type === 'users' ? state[type][type] : state[type];
    return data
      .sort(
        (a, b) => a[sortby] - (type === 'users' ? b.blogs.length : b[sortby])
      )
      .reverse();
  });

  return (
    <div>
      {type === 'users' && (
        <div>
          <h2>Users</h2> <h4 style={{ marginLeft: '18%' }}>Blogs Created</h4>
        </div>
      )}
      {dataList?.map((data) =>
        // This approach is used instead of {props.children} because of the additional
        // props that are required to be passed to the child by this parent component.
        // The child component is accessed and its clone is returned with newly passed props
        React.Children.map(children, (child) =>
          React.cloneElement(child, { data, key: data.id })
        )
      )}
    </div>
  );
};

DataList.propTypes = {
  type: PropTypes.string.isRequired,
  sortby: PropTypes.string.isRequired
};

export default DataList;

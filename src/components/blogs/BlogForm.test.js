import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlogForm from './BlogForm';

test('<BlogForm /> calls onSubmit for blog creation', () => {
  const addBlog = jest.fn();

  const component = render(<BlogForm addBlog={addBlog} />);

  const newBlog = {
    title: 'The fruits of success',
    author: 'Mark Willis',
    url: 'https://restaux.herokuapp.com',
  };

  const getInput = (text, data) => {
    fireEvent.change(component.getByLabelText(text), {
      target: { value: data },
    });
  };

  getInput('Title', newBlog.title);
  getInput('Author', newBlog.author);
  getInput('Url', newBlog.url);

  fireEvent.submit(component.container.querySelector('form'));

  expect(addBlog.mock.calls).toHaveLength(1);
  expect(addBlog.mock.calls[0][0]).toEqual(newBlog);
});

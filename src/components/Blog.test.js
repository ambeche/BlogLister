import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

describe('<Blog />', () => {
  let component;
  let blog;
  let likeMock;
  beforeEach(() => {
    blog = {
      title:
        'Learing to test react components with Jest and react-testing-library',
      author: 'Tara Che',
      url: 'http://localhost:3000',
      likes: 5,
      user: {
        username: 'Tams',
        name: 'Tara Che',
        id: '5f19b65e43f84f2e201ac8e6',
      },
      id: '5f1a2b2b6ea20b181c7966fa',
    };

    likeMock = jest.fn();
    component = render(<Blog blog={blog} modifyBlog={likeMock} />);
  });

  test('renders title and author by default, but not url and likes', () => {
    const hideOrShow = component.container.querySelector('.hideOrShow');

    expect(component.container).toHaveTextContent(
      `${blog.title} ${blog.author}`
    );
    expect(hideOrShow).toHaveStyle('display: none');

    component.debug();
  });

  test('click toggleButton to display/hide url and likes', () => {
    const hideOrShow = component.container.querySelector('.hideOrShow');
    let toggleButton = component.getByText('view');

    fireEvent.click(toggleButton);
    toggleButton = component.getByText('hide'); // label is toggled from view to hide

    expect(hideOrShow).not.toHaveStyle('display: none');

    fireEvent.click(toggleButton);
    expect(hideOrShow).toHaveStyle('display: none');
  });

  test('clicking the like button twice calls the event handler twice with the right argument', () => {
    const likeButton = component.getByText('like');

    fireEvent.click(likeButton);
    fireEvent.click(likeButton);

    expect(likeMock.mock.calls).toHaveLength(2);
    expect(likeMock.mock.calls[0][0]).toEqual(blog);
  });
});

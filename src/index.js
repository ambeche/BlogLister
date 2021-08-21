import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import notificationReducer from './reducers/notificationReducer';
import blogsReducer from './reducers/blogsReducer';
import usersReducer from './reducers/usersReducer';
import toggleReducer from './reducers/toggleReducer';
import App from './App';

const reducers = combineReducers({
  notice: notificationReducer,
  blogs: blogsReducer,
  users: usersReducer,
  toggle: toggleReducer
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

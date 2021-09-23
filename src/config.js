const PDT_BASE_URL = 'https://bloglister-app.herokuapp.com';
const USERS = '/api/users';
const BLOGS = '/api/blogs';
const LOGIN = '/api/login';

const isProduction =
  process.env.NODE_ENV === 'production' ? PDT_BASE_URL : null;

const API_USERS = isProduction ? `${PDT_BASE_URL}${USERS}` : USERS;
const API_BLOGS = isProduction ? `${PDT_BASE_URL}${BLOGS}` : BLOGS;
const API_LOGIN = isProduction ? `${PDT_BASE_URL}${LOGIN}` : LOGIN;
const API_LINK_PREVIEW_KEY = '8b52963249ee6b9235b633caa843526b';

const previewLink = (url) =>
  `https://api.linkpreview.net/?key=${API_LINK_PREVIEW_KEY}&q=${url}`;

export default { API_BLOGS, API_USERS, API_LOGIN, previewLink };

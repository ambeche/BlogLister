const PRODUCTION_MODE = 'https://bloglister-app.herokuapp.com';
const DEV_USERS = 'api/users';
const DEV_BLOGS = 'api/blogs';
const DEV_LOGIN = 'api/login';
const baseUrl = process.env.NODE_ENV === 'production' ? PRODUCTION_MODE : null;

export const USERS_URL = baseUrl
  ? `${PRODUCTION_MODE}/${DEV_USERS}`
  : DEV_USERS;
export const BLOGS_URL = baseUrl
  ? `${PRODUCTION_MODE}/${DEV_BLOGS}`
  : DEV_BLOGS;
export const LOGIN_URL = baseUrl
  ? `${PRODUCTION_MODE}/${DEV_LOGIN}`
  : DEV_LOGIN;

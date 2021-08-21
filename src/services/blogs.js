import axios from 'axios';
import config from '../config';

const baseUrl = config.API_BLOGS;

let token;

const setToken = (newToken) => (token = `bearer ${newToken}`);

const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

const createBlog = async (blog) => {
  const res = await axios.post(baseUrl, blog, {
    headers: { Authorization: token }
  });
  return res.data;
};

const updateBlog = async (blog, id) => {
  const res = await axios.put(`${baseUrl}/${id}`, blog);
  return res.data;
};

const deleteBlog = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: token }
  });
  return res;
};

const createComment = async (comment, blogId) => {
  const res = await axios.post(`${baseUrl}/${blogId}/comments`, comment);
  return res.data;
};

export default {
  getAll,
  createBlog,
  updateBlog,
  setToken,
  deleteBlog,
  createComment
};

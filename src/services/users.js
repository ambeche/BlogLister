import axios from 'axios';

const baseUrl = 'https://bloglister-app.herokuapp.com/api/users';

const getUsers = async () => {
  const res = await axios.get(`${baseUrl}`);
  return res.data;
};
const getUser = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

const createUser = async (user) => {
  const res = await axios.post(baseUrl, user);
  return res.data;
};

export default { getUsers, getUser, createUser };

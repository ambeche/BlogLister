import axios from 'axios';
import config from '../config';

const baseUrl = config.API_LOGIN;

const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};

export default { login };

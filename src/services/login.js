import axios from 'axios';
import { LOGIN_URL } from '../config';

const baseUrl = LOGIN_URL;

const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};

export default { login };

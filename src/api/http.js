import axios from 'axios';
import { getToken } from './helpers';
import { HOST_URL } from '../config/config';

let accessToken;
if (getToken()) {
  accessToken = { accessToken: getToken() };
}

export const http = axios.create({
  baseURL: HOST_URL,
  headers: { ...Authorization },
});

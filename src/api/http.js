import axios from 'axios';
import { getToken } from './helpers';
import { HOST_URL } from '../config';

export const http = axios.create({
  baseURL: HOST_URL,
  headers: { 'x-access-token': getToken() },
});

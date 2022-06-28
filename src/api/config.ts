import { getAccessToken, getLang } from '../helpers';
import axios from "axios";
import { BASE_URL } from "../constants";

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    "Accept-Language": getLang()
  }
  // timeout: 10000,
});

// request.interceptors.request.use((config) => {
//   if (config.headers === undefined) config.headers = {};
//   config.headers.Authorization = 'Bearer ' + getAccessToken();
//   return config;
// })
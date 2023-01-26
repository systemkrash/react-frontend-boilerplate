import jwtDecode from 'jwt-decode';

import config from '../config/index.js';

function getToken() {
  const token = localStorage.getItem(config.tokenKey);

  return token;
}

function setToken(token: string) {
  // TODO: make a JWT validation here
  localStorage.setItem(config.tokenKey, token);
}

function removeToken() {
  localStorage.removeItem(config.tokenKey);
}

function decodeToken() {
  const token = localStorage.getItem(config.tokenKey) as string;

  return jwtDecode(token);
}

export default {
  getToken,
  setToken,
  removeToken,
  decodeToken,
};

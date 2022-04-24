import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createUser(user) {
  await axios.post(`${BASE_URL}/signup`, { user });
}

async function login(user) {
  await axios.post(`${BASE_URL}/`, { user });
}

async function validateSession(token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/`, config);
  return response.data;
}

export const api = { createUser, login, validateSession };

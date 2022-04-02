import axios from "../api/axios";

export const getPokeApi = (offset, limit) => {
  return axios.get(`/pokemon?limit=${limit}&offset=${offset}`);
};

export const getOnePokeApi = (name) => {
  return axios.get(`/pokemon/${name}`);
};

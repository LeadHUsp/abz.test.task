import axios from "axios";

const instance = axios.create({
  baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
});

export const getUsers = (page = 1, count = 6) => {
  return instance.get(`/users?page=${page}&count=${count}`);
};
export const getPositions = () => {
  return instance.get(`/positions`);
};
export const getToken = () => {
  return instance.get(`/token`);
};

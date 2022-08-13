import http from "./http-common";

const getAll = () => {
  return http.get("/theaters");
};

const getTheater = (id) => {
  return http.get(`/theaters/${id}`);
};

const addTheater = (theater) => {
  return http.post(`/theaters`, theater);
};

const TheaterServices = {
  getAll,
  getTheater,
  addTheater,
};

export default TheaterServices;

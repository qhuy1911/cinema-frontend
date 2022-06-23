import http from "./http-common";

const getAll = () => {
  return http.get("/schedules");
};
const getAllByMovieId = (id) => {
  return http.get(`/movies/${id}/schedules`);
};
const getSchedule = (id) => {
  return http.get(`/schedules/${id}`);
};
const getDeleteScheduleById = (id) => {
  return http.delete(`/schedules/${id}`);
};
const getPostSchedule = (idMovie, idRoom, data) => {
  return http.post(`/movies/${idMovie}/rooms/${idRoom}/schedules`, data);
};

const ScheduleDataService = {
  getAll,
  getSchedule,
  getAllByMovieId,
  getDeleteScheduleById,
  getPostSchedule,
};

export default ScheduleDataService;

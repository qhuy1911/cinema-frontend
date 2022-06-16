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

const ScheduleDataService = {
  getAll,
  getSchedule,
  getAllByMovieId,
};

export default ScheduleDataService;

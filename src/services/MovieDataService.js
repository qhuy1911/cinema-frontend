import http from "./http-common";

const getAll = () => {
  return http.get("/movies");
};

const getMovie = (id) => {
  return http.get(`/movies/${id}`);
};

const postMovie = (data) => {
  return http.post(`/movies`, data)
}
const deleteMovie = (id) => {
  return http.delete(`/movies/${id}`)
}
const MovieDataService = {
  getAll,
  getMovie,
  postMovie,
  deleteMovie
};
export default MovieDataService;

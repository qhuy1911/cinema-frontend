import http from "./http-common";

const getAll = () => {
  return http.get("/movies");
};

const getMovie = (id) => {
  return http.get(`/movies/${id}`);
};

const MovieDataService = {
  getAll,
  getMovie,
};

export default MovieDataService;

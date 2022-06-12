import http from "./http-common";

const getAll = () => {
  return http.get("/movies");
};

const MovieDataService = {
  getAll,
};

export default MovieDataService;

import http from "./http-common";

const getAll = () => {
  return http.get("/rooms");
};

const RoomService = {
  getAll,
};

export default RoomService;

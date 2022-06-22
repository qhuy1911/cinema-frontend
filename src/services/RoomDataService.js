import http from "./http-common";

const getAll = () => {
  return http.get("/rooms");
};

const getRoom = (id) => {
  return http.get(`/rooms/${id}`);
};
const createRoom = (data) => {
  return http.post("/rooms", data);
};
const remove = (id) => {
  return http.delete(`/rooms/${id}`);
};
const updateRoom = (id, data) => {
  return http.put(`/rooms/${id}`, data);
};
const RoomDataService = {
  getAll,
  getRoom,
  createRoom,
  remove,
  updateRoom,
};

export default RoomDataService;

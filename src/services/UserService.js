import http from "./http-common";

const getAllUser = () => {
  return http.get("/users");
};

const UserService = {
  getAllUser,
};
export default UserService;

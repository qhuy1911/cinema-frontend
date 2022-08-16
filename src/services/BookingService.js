import http from "./http-common";

const createBooking = (userId) => {
  return http.post(`/user/${userId}/bookings`, {});
};
const getAll = () => {
  return http.get("/bookings");
};

const getBooking = (id) => {
  return http.get(`/bookings/${id}`);
};

const BookingService = {
  createBooking,
  getAll,
  getBooking,
};

export default BookingService;

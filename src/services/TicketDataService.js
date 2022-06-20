import http from "./http-common";

const getAllBookingDetails = (id) => {
  return http.get(`/bookings/${id}/details`);
};
const getBookingDetail = (id) => {
  return http.get(`/booking-details/${id}`);
};
const getAllSeats = (id) => {
  return http.get(`/seats/${id}`);
};

const TicketDataService = {
  getAllBookingDetails,
  getBookingDetail,
  getAllSeats
};

export default TicketDataService;
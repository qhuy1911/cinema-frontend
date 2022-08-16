import http from "./http-common";

const createBookingDetail = (bookingId, ticketId, seatId) => {
  return http.post(
    `/bookings/${bookingId}/tickets/${ticketId}/seats/${seatId}/details`,
    {}
  );
};
const getBookingDetailByBokingId = (bookingId) => {
  return http.get(`/bookings/${bookingId}/details`, {});
};

const getBookingDetailByTicketId = (ticketId) => {
  return http.get(`/tickets/${ticketId}/details`);
};

const getAll = () => {
  return http.get(`/details`);
};
const BookingDetailService = {
  createBookingDetail,
  getBookingDetailByBokingId,
  getBookingDetailByTicketId,
  getAll,
};

export default BookingDetailService;

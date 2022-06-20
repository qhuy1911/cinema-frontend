import http from "./http-common";

const getAllBookingDetails = (id) => {
  return http.get(`/bookings/${id}/details`);
};

const TicketDataService = {
  getAllBookingDetails
};

export default TicketDataService;
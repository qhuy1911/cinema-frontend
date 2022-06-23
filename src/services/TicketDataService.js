import http from "./http-common";

const getAllBookingDetails = (id) => {
  return http.get(`/bookings/${id}/details`);
};

const createTicket = (scheduleId) => {
  return http.post(`schedules/${scheduleId}/tickets`, {});
};

const updateStatusSeat = (id) => {
  return http.put(`/seats/${id}`);
};

const TicketDataService = {
  getAllBookingDetails,
  createTicket,
  updateStatusSeat,
};

export default TicketDataService;

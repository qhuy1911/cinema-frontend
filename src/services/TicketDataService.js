import http from "./http-common";

const getAllBookingDetails = (id) => {
  return http.get(`/bookings/${id}/details`);
};
const createTicket=(scheduleId)=>{
  return http.post(`schedules/${scheduleId}/tickets`,{})
}

const TicketDataService = {
  getAllBookingDetails,
  createTicket
};

export default TicketDataService;
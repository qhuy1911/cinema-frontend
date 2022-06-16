import http from "./http-common";

const getTicket = (id) => {
  return http.get(`/tickets/${id}`);
};

const TicketDataService = {
    getTicket
};

export default TicketDataService;
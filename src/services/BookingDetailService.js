import http from "./http-common";

const createBookingDetail = (bookingId,ticketId,seatId) => {
    return http.post(`/bookings/${bookingId}/tickets/${ticketId}/seats/${seatId}/details`,{});
  };
const BookingDetailService = {
    createBookingDetail
  };

export default BookingDetailService;
  
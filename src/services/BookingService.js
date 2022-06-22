import http from "./http-common";

const createBooking = (userId) => {
    return http.post(`/user/${userId}/bookings`,{});
  };
const BookingService = {
    createBooking
  };

export default BookingService;
  
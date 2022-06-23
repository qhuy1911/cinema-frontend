import http from "./http-common";

const createBooking = (userId) => {
    return http.post(`/user/${userId}/bookings`,{});
  };
  const getAll = () => {
    return http.get("/bookings");
  };
  
const BookingService = {
    createBooking,
    getAll
  };
  
export default BookingService;
  
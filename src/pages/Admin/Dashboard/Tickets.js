import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import BookingDetailService from "../../../services/BookingDetailService";
import BookingService from "../../../services/BookingService";
import TicketDataService from "../../../services/TicketDataService";
import "./Dashboard.css";

function Tickets() {
  const [tickets, setTickets] = useState();
  const [bookings, setBookings] = useState();
  const [bookingDetails, setBookingDetails] = useState();

  useEffect(() => {
    getAllTickets();
    getAllBookings();
    getAllBookingDetails();
  }, []);

  const getAllTickets = () => {
    TicketDataService.getAllTickets().then((res) => {
      setTickets(res.data);
    });
  };

  const getAllBookings = () => {
    BookingService.getAll().then((res) => {
      setBookings(res.data);
    });
  };

  const getAllBookingDetails = () => {
    BookingDetailService.getAll().then((res) => setBookingDetails(res.data));
  };

  const getBookingDetail = (ticketId) => {
    let bookingDetail = bookingDetails.find(
      (bookingDetail) => bookingDetail.ticket.id === ticketId
    );
    return bookingDetail;
  };

  const getBooking = (ticketId) => {
    let bookingDetail = bookingDetails.find(
      (bookingDetail) => bookingDetail.ticket.id === ticketId
    );
    // console.log(bookingDetail);
    let booking = bookings.find(
      (booking) => booking.id === bookingDetail.booking.id
    );
    return booking;
  };

  return (
    <div className="dashboard__wrapper">
      <h1>Recent Sale</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Movie</th>
            <th>Seat</th>
            <th>Theater</th>
            <th>Datetime</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            tickets.map((ticket) => {
              return (
                <tr key={ticket.id}>
                  <td></td>
                  <td>
                    {bookingDetails &&
                      bookings &&
                      getBooking(ticket.id).user.fullName}
                  </td>
                  <td>{ticket.schedule.movie.name}</td>
                  <td>
                    {bookingDetails && getBookingDetail(ticket.id).seat.name}
                  </td>
                  <td>{ticket.schedule.theater.name}</td>
                  <td>{ticket.schedule.datetime}</td>
                  <td>
                    {ticket.price} <b>VND</b>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Tickets;

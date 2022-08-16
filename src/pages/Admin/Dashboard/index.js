/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {faChartLine} from "@fortawesome/free-solid-svg-icons";
import {Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./Dashboard.css";
import TicketDataService from "../../../services/TicketDataService";
import TheaterServices from "../../../services/TheaterServices";
import BookingService from "../../../services/BookingService";
import BookingDetailService from "../../../services/BookingDetailService";
import {Link} from "react-router-dom";

function Dashboard() {
  const [tickets, setTickets] = useState();
  const [recentTickets, setRecentTickets] = useState();
  const [theaters, setTheaters] = useState();
  const [bookings, setBookings] = useState();
  const [bookingDetails, setBookingDetails] = useState();
  const now = new Date();

  useEffect(() => {
    getAllTickets();
    getAllTheaters();
    getAllBookings();
    getAllBookingDetails();
  }, []);

  const getAllTickets = () => {
    TicketDataService.getAllTickets().then((res) => {
      setTickets(res.data);
      if (res.data.length > 5) {
        setRecentTickets(res.data.slice(0, 5));
      } else {
        setRecentTickets(res.data);
      }
    });
  };

  const getAllTheaters = () => {
    TheaterServices.getAll().then((res) => setTheaters(res.data));
  };

  const getAllBookings = () => {
    BookingService.getAll().then((res) => {
      setBookings(res.data);
    });
  };

  const getAllBookingDetails = () => {
    BookingDetailService.getAll().then((res) => setBookingDetails(res.data));
  };

  const calculate = () => {
    // console.log(tickets);
    // console.log(now);
    const results = [];
    theaters.forEach((theater) => {
      let sum = 0;
      tickets.forEach((ticket) => {
        var datetime = ticket.schedule.datetime;
        // console.log(theater.id === ticket.schedule.theater.id);
        // console.log(now.getDate(), getDate(datetime));
        // console.log(now.getMonth() + 1 === getMonth(datetime));
        // console.log(now.getFullYear() === getYear(datetime));
        if (
          theater.id === ticket.schedule.theater.id &&
          now.getDate() === getDate(datetime) &&
          now.getMonth() + 1 === getMonth(datetime) &&
          now.getFullYear() === getYear(datetime)
        ) {
          sum += ticket.price;
        }
      });
      results.push({...theater, total: sum});
    });
    // console.log(results);
    return results;
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

  const getDate = (str) => {
    const datetime = str.split(" ");
    const date = datetime[0].split("/");
    return parseInt(date[0]);
  };

  const getMonth = (str) => {
    const datetime = str.split(" ");
    const date = datetime[0].split("/");
    return parseInt(date[1]);
  };

  const getYear = (str) => {
    const datetime = str.split(" ");
    const date = datetime[0].split("/");
    return parseInt(date[2]);
  };

  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__header">
        {tickets &&
          theaters &&
          calculate().map((theater) => (
            <div key={theater.id} className="dashboard__today">
              <FontAwesomeIcon
                icon={faChartLine}
                className="dashboard__today-icon"
              />
              <div className="dashboard__info">
                <span className="dashboard__info-theater">{theater.name}</span>
                <span className="dashboard__info-title">Today Sale</span>
                <span className="dashboard__info-number">
                  {theater.total} <b>VND</b>
                </span>
              </div>
            </div>
          ))}
        <div className="dashboard__today">
          <FontAwesomeIcon
            icon={faChartLine}
            className="dashboard__today-icon"
          />
          <div className="dashboard__info">
            <span className="dashboard__info-theater">Total</span>
            <span className="dashboard__info-title">Today Sale</span>
            <span className="dashboard__info-number">
              {tickets &&
                theaters &&
                calculate().reduce((total, item) => {
                  return total + item.total;
                }, 0)}{" "}
              <b>VND</b>
            </span>
          </div>
        </div>
      </div>

      {/* Recent */}
      <div className="dashboard__recent">
        <div className="dashboard__recent-heading">
          <h5>Recent sales</h5>
          <Link to={"recent"}>Show all</Link>
        </div>
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
            {recentTickets &&
              recentTickets.map((ticket) => {
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
    </div>
  );
}

export default Dashboard;

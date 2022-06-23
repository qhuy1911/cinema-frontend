import { useEffect, useState } from "react";
import BookingService from "../../../services/BookingService";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BookingList.css";
import BookingDetailService from "../../../services/BookingDetailService";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [bookingDetails, setBookingDetail] = useState([]);
  const [id, setId] = useState();

  const [count, setCount] = useState(0);

  const bk = [
    {
      id,
      bookingDetails,
    },
  ];
  console.log("g", bk);
  useEffect(() => {
    BookingService.getAll().then((booking) => {
      setBookings(booking.data);
    });
  }, []);

  useEffect(() => {
    BookingDetailService.getAll().then((booking) => {
      setBookingDetail(booking.data);
      // setCount(booking.data.booking.);
    });
  }, []);
  let counts = 0;
  return (
    <div className="booking-list-wrapper">
      <h2>BookingList</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            return (
              <tr>
                <td>{booking.id}</td>
                <td>{booking.user.username}</td>

                <td>
                  {bookingDetails.map((t, key) => {
                    let idSeat = t.seat.id;
                    counts = 0;
                    return (
                      t.booking.id === booking.id && (
                        <span key={key}>
                          {idSeat} <span>&nbsp;</span>
                        </span>
                      )
                    );
                  })}
                </td>
                <td>
                  {bookingDetails.map((t) => {
                    t.booking.id === booking.id && counts++;
                  })}
                  {counts * 75000}
                </td>
                <td>
                  <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BookingList;

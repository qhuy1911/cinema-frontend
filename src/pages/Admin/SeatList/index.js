/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SeatDataService from "../../../services/SeatDataService";
import "./SeatList.css";

function SeatList() {
  let { id } = useParams();

  const [seats, setSeats] = useState(null);

  useEffect(() => {
    if (id) {
      getSeatByScheduleId(id);
    }
  }, [id]);
  const getSeatByScheduleId = (id) => {
    SeatDataService.getSeatByScheduleId(id).then((seats) => {
      setSeats(seats.data);
    });
  };

  return (
    <div className="movie-list-wrapper">
      <h2>Seat List</h2>
      <div className="showcase">
        <span className="div" />
        Đã đặt
      </div>
      <div className="cinema">
        <div className="cinema-screen"> Màn hình</div>
        <div className="cinema-seats">
          {seats ? (
            seats.map((seat) => {
              if (seat.status) {
                return (
                  <span key={seat.id} className="seat-list">
                    {seat.name}
                  </span>
                );
              } else {
                return (
                  <span key={seat.id} className="seat-list disable">
                    {seat.name}
                  </span>
                );
              }
            })
          ) : (
            <div className="empty-table">Trống</div>
          )}
        </div>
      </div>
      <Link className="btn-add" to={"/admin/schedule"}>
        Quay lại
      </Link>
    </div>
  );
}

export default SeatList;

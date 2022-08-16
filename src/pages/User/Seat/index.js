import "./Seat.css";
import clsx from "clsx";
import {useEffect, useState} from "react";
import SeatDataService from "../../../services/SeatDataService";
import {useNavigate, useParams} from "react-router-dom";

const price = 45000;

function Seat() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [schedule, setSchedule] = useState({});
  let {id} = useParams();
  const navigate = useNavigate();
  // console.log(schedule)
  const toCheckout = () => {
    navigate("/checkout", {
      state: {seats: selectedSeats, schedule: schedule},
    });
  };

  useEffect(() => {
    getSchedualeById(id);
  }, [id]);
  const getSchedualeById = (id) => {
    SeatDataService.getScheduleById(id).then((res) => {
      setSchedule(res.data);
    });
  };

  return (
    <div className="Seat">
      <div className="Seat-contai">
        <ShowCase />
        <Cinema
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>
            setSelectedSeats(selectedSeats)
          }
        />
      </div>

      <div className="Seat-infor">
        <div className="Seat-infor-top">
          {/* <p className="Seat-infor-top-namefilm">{schedule.movie.id}</p> */}
          <p className="Seat-infor-top-nametheater">Cinestar Sinh Viên</p>
          <span className="Seat-infor-top-total">Tổng số ghế:</span>
          <span className="count">{selectedSeats.length}</span>
        </div>
        <div className="Seat-infor-midle">
          <span className="Seat-infor-midle-price">Tổng số tiền</span>
          <span className="infor-item-total">
            {selectedSeats.length * price} vnd
          </span>
        </div>
        <button
          disabled={selectedSeats.length === 0}
          className="Seat-infor-bottom-button"
          onClick={() => toCheckout()}
        >
          Tiếp tục
        </button>
      </div>
    </div>
  );
}

function ShowCase() {
  return (
    <ul className="showcase">
      <li className="showcase-empty">
        {" "}
        <div className="div"></div> Ghế chưa chọn
      </li>
      <li className="showcase-selected">
        {" "}
        <div className="div" />
        Ghế bạn chọn
      </li>
      <li className="showcase-occupied">
        {" "}
        <div className="div" />
        Đã bán
      </li>
    </ul>
  );
}

function Cinema({selectedSeats, onSelectedSeatsChange}) {
  const [seat1, setSeat1] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getSeatByScheduleId(id);
  }, [id]);
  const getSeatByScheduleId = (id) => {
    SeatDataService.getSeatByScheduleId(id).then((seats) => {
      setSeat1(seats.data);
    });
  };
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="cinema">
      <div className="cinema-screen"> Màn hình</div>
      <div className="cinema-leter"></div>
      <div className="cinema-seats">
        {seat1.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = +seat.status === 0;
          return (
            <span
              tabIndex="0"
              key={seat.id}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={() => handleSelectedState(seat)}
            >
              {" "}
              {seat.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Seat;

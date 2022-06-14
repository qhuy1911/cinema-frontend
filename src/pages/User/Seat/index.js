import './Seat.css'
import clsx from "clsx";
import { useState } from 'react';
const price = 45000;
const seats = Array.from({ length: 16 * 8 }, (_, index) => index)
function Seat() {

  const [selectedSeats, setSelectedSeats] = useState([])

  return <div className="Seat">
    <div className="Seat-contai"> <ShowCase />
      <Cinema
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)} /></div>

    <div className="Seat-infor">
      <div className="Seat-infor-top">
        <p className="Seat-infor-top-namefilm">Em và Trịnh</p>
        <p className="Seat-infor-top-nametheater">Cinestar Sinh Viên</p>
        <span className="Seat-infor-top-total">Tổng số ghế:</span>
        <span className="count">{selectedSeats.length}</span>
      </div>
      <div className="Seat-infor-midle">
        <span className="Seat-infor-midle-price">Tổng số tiền</span>
        <span className="infor-item-total">
          {selectedSeats.length * price}{' '}vnd
        </span>

      </div>
      <div className="Seat-infor-bottom">
        <button className="Seat-infor-bottom-button">Tiếp tục</button>
      </div>
    </div>
  </div>
}
function ShowCase() {
  return (
    <ul className="showcase">
      <li className="showcase-empty"> <div className='div'></div> Ghế chưa chọn</li>
      <li className="showcase-selected">  <div className='div' />Ghế bạn chọn</li>
      <li className="showcase-occupied">  <div className='div' />Đã bán</li>
    </ul>
  )
}
function Cinema({ selectedSeats, onSelectedSeatsChange }) {

  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }
  return (
    <div className="cinema">
      <div className="cinema-screen" > Màn hình</div>
      <div className="cinema-leter">
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <p>E</p>
        <p>F</p>
        <p>G</p>
        <p>H</p>

      </div>
      <div className="cinema-seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          return (
            < span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
              )
              }
              onClick={() => handleSelectedState(seat)}
            />

          )
        })}
      </div>
    </div>
  )
}

export default Seat;

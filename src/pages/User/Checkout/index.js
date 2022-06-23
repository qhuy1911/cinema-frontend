/* eslint-disable no-use-before-define */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OrderSummary from "../../../components/OrderSummary";
import AuthService from "../../../services/AuthService";
import BookingDetailService from "../../../services/BookingDetailService";
import BookingService from "../../../services/BookingService";
import TicketDataService from "../../../services/TicketDataService";
import "./Checkout.css";

const getTime = (datetime) => {
  const time = datetime.split(" ");
  const times = time[1].split(":");
  const hours = times[0];
  const minutes = times[1];

  return hours + ":" + minutes;
};

const getDate = (datetime) => {
  const date = datetime.split(" ");
  const dates = date[0].split("/");
  const day = dates[0];
  const month = dates[1];
  const year = dates[2];

  return day + "/" + month + "/" + year;
};

function Checkout(props) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const user = AuthService.getCurrentUser();
  const seats = location.state.seats;
  const schedule = location.state.schedule;

  // const handleCheckout = () => {
  //   setName("");
  //   setEmail("");
  //   setPhone("");
  // };
  async function onCheckout() {
    const booksSe = await BookingService.createBooking(user.id);
    // console.log(booksSe.data.id);
    let bookingId = booksSe.data.id;
    for (let i = 0; i < seats.length; i++) {
      const ticketSe = await TicketDataService.createTicket(schedule.id);
      let ticketId = ticketSe.data.id;
      //     })
      //     console.log(ticketId)

      await BookingDetailService.createBookingDetail(
        bookingId,
        ticketId,
        seats[i].id
      );

      await TicketDataService.updateStatusSeat(seats[i].id);
    }

    setSuccess(true);
  }

  return (
    <div>
      {success ? (
        <div className="checkout-success">
          <h2>Đặt vé thành công</h2>
          <Link to={"/"}>
            <button className="checkout-button">Quay lại</button>
          </Link>
        </div>
      ) : (
        <div className="checkout">
          <h1 className="checkout-heading">Checkout</h1>
          <div className="checkout-container">
            {/* Content */}
            <div className="checkout-content">
              {/* Welcome */}
              <div className="checkout-welcome">
                <span>
                  Xin chào <b>qhuy1911</b>.
                </span>
              </div>
              {/* Order */}
              <OrderSummary quantity={seats.length} />
              {/* Form */}
              {/* <div className="checkout-form">
            <div className="checkout-form-heading">Thông tin cá nhân</div>
            <div className="checkout-form-containter">
              <div className="checkout-form-input">
                <label className="checkout-form-label" htmlFor="name">
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="checkout-form-input">
                <label className="checkout-form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="checkout-form-input">
                <label className="checkout-form-label" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
          </div> */}
            </div>
            {/* Sidebar */}
            <div className="checkout-sidebar">
              {/* Schedule */}
              <div className="checkout-schedule">
                <b>Cinestar Sinh Viên</b>
                <p>{schedule.movie.name}</p>
                <p>
                  Suất <b>{getTime(schedule.datetime)}</b> - Ngày{" "}
                  <b>{getDate(schedule.datetime)}</b>
                </p>
                <p>
                  Phòng chiếu <b>{schedule.room.name}</b> - Ghế{" "}
                  {seats.map((seat) => (
                    <b key={seat.id}>{seat.name} </b>
                  ))}
                </p>
              </div>
              {/* Price */}
              <div className="checkout-total-price">
                <div className="checkout-total-price-title">Tổng đơn hàng</div>
                <div className="checkout-total-price-money">
                  {45000 * seats.length} đ
                </div>
              </div>
              {/* Notify */}
              <div className="checkout-notify">
                <p>Vé đã mua không thể đổi hoặc hoàn tiền.</p>
                <p>
                  Mã vé sẽ được gửi 01 lần qua số điện thoại và email đã nhập.
                  Vui lòng kiểm tra lại thông tin trước khi tiếp tục.
                </p>
              </div>
              {/* Button */}
              <button className="checkout-button" onClick={onCheckout}>
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;

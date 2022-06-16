import { useState } from "react";
import OrderSummary from "../../../components/OrderSummary";
import "./Checkout.css";

const schedule = {
  movie: {
    name: "Trịnh Công Sơn",
  },
  room: {
    name: "R02",
  },
  datetime: new Date(2022, 5, 14, 23, 20),
  seats: [
    {
      id: 1,
      name: "A01",
    },
    {
      id: 2,
      name: "A02",
    },
  ],
};

const getTime = (datetime) => {
  const hours = datetime.getHours();
  const minutes = datetime.getMinutes();

  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes)
  );
};

const getDate = (datetime) => {
  const day = datetime.getDate();
  const month = datetime.getMonth() + 1;
  const year = datetime.getFullYear();

  return (
    (day < 10 ? "0" + day : day) +
    "/" +
    (month < 10 ? "0" + month : month) +
    "/" +
    year
  );
};

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckout = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
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
          <OrderSummary />
          {/* Form */}
          <div className="checkout-form">
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
          </div>
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
              {schedule.seats.map((seat) => (
                <b key={seat.id}>{seat.name} </b>
              ))}
            </p>
          </div>
          {/* Price */}
          <div className="checkout-total-price">
            <div className="checkout-total-price-title">Tổng đơn hàng</div>
            <div className="checkout-total-price-money">47,500 đ</div>
          </div>
          {/* Notify */}
          <div className="checkout-notify">
            <p>Vé đã mua không thể đổi hoặc hoàn tiền.</p>
            <p>
              Mã vé sẽ được gửi 01 lần qua số điện thoại và email đã nhập. Vui
              lòng kiểm tra lại thông tin trước khi tiếp tục.
            </p>
          </div>
          {/* Button */}
          <button className="checkout-button" onClick={handleCheckout}>
            Thanh toán
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

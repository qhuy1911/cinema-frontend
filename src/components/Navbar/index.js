import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showAction, setShowAction] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img
              className="navbar-logo-img"
              src="https://moveek.com/bundles/ornweb/img/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-search">
          <input
            className="navbar-search-input"
            type="text"
            placeholder="Từ khóa tìm kiếm..."
          />
          <FontAwesomeIcon
            className="navbar-search-icon"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="navbar-user">
          <img
            className="navbar-user-img"
            src="https://moveek.com/bundles/ornweb/img/no-avatar.png"
            alt="user"
            onClick={() => {
              setShowAction(!showAction);
            }}
          />
          {showAction === true && (
            <ul className="navbar-user-action">
              <li className="navbar-user-action-items">Trang cá nhân</li>
              <li className="navbar-user-action-items">Quản lý tài khoản</li>
              <li className="navbar-user-action-items">Lịch sử mua vé</li>
              <li className="navbar-user-action-items">Đăng xuất</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

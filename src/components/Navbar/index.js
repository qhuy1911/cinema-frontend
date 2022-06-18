import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./Navbar.css";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(() =>
    AuthService.getCurrentUser()
  );
  const [showAction, setShowAction] = useState(false);

  const onLogout = () => {
    AuthService.logout();
    setCurrentUser(AuthService.getCurrentUser());
  };

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
          {showAction === true &&
            (currentUser ? (
              <ul className="navbar-user-action">
                <li className="navbar-user-action-items">Trang cá nhân</li>
                <li className="navbar-user-action-items">Quản lý tài khoản</li>
                <li className="navbar-user-action-items">Lịch sử mua vé</li>
                <li className="navbar-user-action-items" onClick={onLogout}>
                  Đăng xuất
                </li>
              </ul>
            ) : (
              <ul className="navbar-user-action">
                <li className="navbar-user-action-items">
                  <Link to={"/login"} className="navbar-user-action-link">
                    Đăng nhập
                  </Link>
                </li>
                <li className="navbar-user-action-items">
                  <Link to={"/register"} className="navbar-user-action-link">
                    Đăng ký
                  </Link>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminHeader.css";

function AdminHeader() {
  const [showAction, setShowAction] = useState(false);

  return (
    <header className="navbar-wrapper-adminHeader">
      <div className="navbar-container-adminHeader">
        <div className="navbar-logo-adminHeader">
          <Link to="/">
            <img
              className="navbar-logo-img-adminHeader"
              src="https://moveek.com/bundles/ornweb/img/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-search-adminHeader">
          <input
            className="navbar-search-input-adminHeader"
            type="text"
            placeholder="Từ khóa tìm kiếm..."
          />
          <FontAwesomeIcon
            className="navbar-search-icon-adminHeader"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="navbar-user-adminHeader">
          <img
            className="navbar-user-img-adminHeader"
            src="https://moveek.com/bundles/ornweb/img/no-avatar.png"
            alt="user"
            onClick={() => {
              setShowAction(!showAction);
            }}
          />
          {showAction === true && (
            <ul className="navbar-user-action-adminHeader">
              <li className="navbar-user-action-items-adminHeader">
                Trang cá nhân
              </li>
              <li className="navbar-user-action-items-adminHeader">
                Đăng xuất
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;

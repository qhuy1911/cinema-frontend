import { Link } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  return (
    <div className="admin-navbar-wrapper">
      <div className="admin-navbar-container">
        <ul>
          <li>
            <Link to={"/admin/theaters"}>Theaters</Link>
          </li>
          <li>
            <Link to={"/admin/movies"}>Movies</Link>
          </li>
          <li>
            <Link to={"/admin/schedule"}>Schedules</Link>
          </li>
          <li>
            <Link to={"/admin/rooms"}>Rooms</Link>
          </li>
          <li>
            <Link to={"/admin/bookings"}>Bookings</Link>
          </li>
          <li>
            <Link to={"/admin/users"}>Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;

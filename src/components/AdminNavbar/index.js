import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="admin-navbar-wrapper">
      <div className="admin-navbar-container">
        <ul>
          <li>
            <Link to={"/admin/movies"}>Movies</Link>
          </li>
          <li>
            <Link to={"/admin/schedule"}>Schedule</Link>
          </li>
          <li>
            <Link to={"/admin/rooms"}>Rooms</Link>
          </li>
          <li>
            <Link to={"/admin/seats"}>Seat</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;

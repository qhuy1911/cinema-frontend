import "./AdminNavbar.css";

function AdminNavbar() {
  return (
      <div className="admin-navbar-wrapper">
        <div className="admin-navbar-container">
         
          <ul>
            <li>
              <a href="/admin/movies">Movies</a>
            </li>
            <li>
              <a href="/admin/schedule">Schedule</a>
            </li>
            <li>
              <a href="/admin/rooms">Rooms</a>
            </li>
            <li>
              <a href="/admin/seats">Seat</a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default AdminNavbar;

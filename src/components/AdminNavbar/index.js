import "./AdminNavbar.css";

function AdminNavbar() {
  return (
    <div className="admin-navbar-wrapper">
      <div className="admin-navbar-container">
        <h2>Admin Navbar</h2>
        <ul>
          <li>Movies</li>
          <li>Schedule</li>
          <li>Rooms</li>
          <li>Seat</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;

import AdminNavbar from "../../AdminNavbar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout-wrapper">
      <AdminNavbar />
      <div className="admin-layout-content">{children}</div>
    </div>
  );
}

export default AdminLayout;

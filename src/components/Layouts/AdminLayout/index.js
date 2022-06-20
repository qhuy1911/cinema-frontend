import AdminNavbar from "../../AdminNavbar";
import AdminHeader from "../../AdminHeader";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div>
      <AdminHeader />
      <div className="admin-layout-wrapper">
        <AdminNavbar />
        <div className="admin-layout-content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;

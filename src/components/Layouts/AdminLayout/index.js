import AdminNavbar from "../../AdminNavbar";

function AdminLayout({ children }) {
  return (
    <div>
      <AdminNavbar />
      <div className="container">{children}</div>
    </div>
  );
}

export default AdminLayout;

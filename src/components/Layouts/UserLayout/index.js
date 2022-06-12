import Navbar from "../../Navbar";
import "./UserLayout.css";

function UserLayout({ children }) {
  return (
    <div className="user-layout-wrapper">
      <Navbar />
      <div className="user-layout-container">
        <div className="user-layout-content">{children}</div>
      </div>
    </div>
  );
}

export default UserLayout;

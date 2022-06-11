import Navbar from "../../Navbar";

function UserLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="containter">{children}</div>
    </div>
  );
}

export default UserLayout;

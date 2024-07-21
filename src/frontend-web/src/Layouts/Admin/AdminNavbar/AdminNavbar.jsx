import { NavLink } from "react-router-dom";
import "./admin-navbar.css";

const AdminNavbar = () => {
  const classNameFunc = ({ isActive }) =>
    isActive ? "admin-nav active-admin-nav" : "admin-nav";
  return (
    <div className="admin-navbar">
      <NavLink to="/admin/dashboard" className={classNameFunc}>
        Dashboard
      </NavLink>
      <NavLink to="/admin/user-management" className={classNameFunc}>
        User Management
      </NavLink>
      <NavLink to="/admin/game-management" className={classNameFunc}>
        Game Management
      </NavLink>
    </div>
  );
};

export default AdminNavbar;

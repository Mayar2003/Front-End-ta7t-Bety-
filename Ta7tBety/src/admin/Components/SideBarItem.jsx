import "./Components.css";
import { NavLink } from "react-router-dom";

export default function SideBarItem({ title, icon, onClick, link, end }) {
  return (
    <NavLink to={link} onClick={onClick} className="sidebar-item" end={end}>
      {icon}
      {title}
    </NavLink>
  );
}

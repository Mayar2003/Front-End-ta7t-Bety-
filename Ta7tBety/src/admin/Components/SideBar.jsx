import React from "react";
import Logo from "./Logo";
import {
  ComplaintsIcon,
  DashBoardIcon,
  OrdersIcon,
  ProvidersIcon,
  UsersIcon,
} from "./Icons";
import SideBarItem from "./SideBarItem";
import "./Components.css";

export default function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "21%",
        backgroundColor: "#15243F",
      }}
    >
      <Logo />

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <SideBarItem
              title="Dashboard"
              icon={<DashBoardIcon />}
              link="/dashboard"
              end
            />
          </li>
          <li>
            <SideBarItem title="Users" icon={<UsersIcon />} link="users" />
          </li>
          <li>
            <SideBarItem
              title="Providers"
              icon={<ProvidersIcon />}
              link="providers"
            />
          </li>
          <li>
            <SideBarItem title="Orders" icon={<OrdersIcon />} link="orders" />
          </li>
          {/* <li>
            <SideBarItem
              title="Complaints"
              icon={<ComplaintsIcon />}
              link="complaints"
            />
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

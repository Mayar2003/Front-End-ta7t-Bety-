import React from "react";
import AdminUsersStatItem from "./Admin.Users.StatItem";
import {
  NewUsersIcon,
  OtherUsersIcon,
  TopUsersIcon,
  TotalUsersIcon,
} from "../../Icons";

export default function AdminUsersStatsList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "30px",
        width: "100%",
        height: "80px",
        marginTop: "2.5rem",
        marginBottom: "1.25rem",
      }}
    >
      {/* <AdminUsersStatItem icon={<TotalUsersIcon />} title="Total Users" /> */}
      <AdminUsersStatItem icon={<NewUsersIcon />} title="New Users" />
      <AdminUsersStatItem icon={<TopUsersIcon />} title="Top Users" />
      {/* <AdminUsersStatItem icon={<OtherUsersIcon />} title="Other Users" /> */}
    </div>
  );
}

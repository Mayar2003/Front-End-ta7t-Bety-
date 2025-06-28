import React from "react";
import AdminDashboardItem from "./Admin.Dashboard.Item";
import {
  MonthlyUsersIcon,
  NewSignUpsIcon,
  PageViewsIcon,
  ProvidersIcon,
} from "../../Icons";

export default function AdminDashboardFirstRow() {
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
      <AdminDashboardItem
        icon={<PageViewsIcon />}
        title={"Pageviews"}
        data={"50.8K"}
        percentage={28.4}
      />
      <AdminDashboardItem
        icon={<MonthlyUsersIcon />}
        title={"Monthly users"}
        data={"23.6K"}
        percentage={-12.6}
      />
      <AdminDashboardItem
        icon={<NewSignUpsIcon />}
        title={"New sign ups"}
        data={"756"}
        percentage={3.1}
      />
      <AdminDashboardItem
        icon={<ProvidersIcon size={18} color="#15243F" strokeWidth={4} />}
        title={"Providers"}
        data={"2.3K"}
        percentage={-11.3}
      />
    </div>
  );
}

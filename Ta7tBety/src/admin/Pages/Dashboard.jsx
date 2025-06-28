import React from "react";
import AdminDashboardHeader from "../Components/Dashboard/Header/Admin.Dashboard.Header";
import AdminDashboardFirstRow from "../Components/Dashboard/FirstRow/Admin.Dashboard.FirstRow";
import AdminDashboardSecondRow from "../Components/Dashboard/SecondRow/Admin.Dashboard.SecondRow";

export default function Dashboard() {
  return (
    <div>
      <AdminDashboardHeader />
      <AdminDashboardFirstRow />
      <AdminDashboardSecondRow />
    </div>
  );
}

import SideBar from "../Components/SideBar";
import { Outlet } from "react-router-dom";

export default function AdminMain() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <SideBar />
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          paddingTop: "1.875rem",
          marginLeft: "2.438rem",
          marginRight: "3.75rem",
          paddingBottom: "3.75rem",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

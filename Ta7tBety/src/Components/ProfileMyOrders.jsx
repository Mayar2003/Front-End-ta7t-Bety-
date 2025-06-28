import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProfileMyOrders() {
  return (
    <>
      <div className=" ProfileMyOrders flex W100">
        <div className="MyOrdersLeftDiv ">
          <div className="MyOrdersChoices">
            <Link to="MyActiveOrders" className="decorationNone">
              {" "}
              <p>Active</p>{" "}
            </Link>
             <Link to="MyPendingOrders" className="decorationNone">
              {" "}
              <p>Pending</p>
            </Link>
            <Link to="MyCanceldOrders" className="decorationNone">
              {" "}
              <p>Canceled</p>
            </Link>
            <Link to="MyCompletedOrders" className="decorationNone">
              {" "}
              <p>Completed</p>
            </Link>
          </div>
        </div>

        <div className="MyOrdersRightDiv flex justContentSpaceBet W100 alignContentCenter">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ProfileMyOrders;

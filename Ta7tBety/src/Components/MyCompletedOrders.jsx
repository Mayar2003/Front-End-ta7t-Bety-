import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useMyOrders from "../Hooks/useMyOrders";

function MyCompletedOrders() {
  const { orders } = useMyOrders("completed");

  return (
    <>
      <div className="ActiveOrders flex Wrap">
        {orders.map((order) => (
          <Item key={order._id} order={order} />
        ))}

        <div className="Order flex justContentSpaceBet W100">
          <div className="Photo-Info flex justContentSpaceBet">
            <img
              className="OrderImg"
              src="../../Graduation project assestst/Graduation project/super market.jpg"
              alt=""
            />
            <div className="orderDetails">
              <h6>Order#999222</h6>
              <p>April,06</p>
              <p>Family Market</p>
            </div>
          </div>
          {/* <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Leave Review</button>
          </div> */}
        </div>

        <div className="Order flex justContentSpaceBet W100">
          <div className="Photo-Info flex justContentSpaceBet">
            <img
              className="OrderImg"
              src="../../Graduation project assestst/Graduation project/صيدليه.jpg"
              alt=""
            />
            <div className="orderDetails">
              <h6>Order#999222</h6>
              <p>April,06</p>
              <p>Family Market</p>
            </div>
          </div>
          {/* <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Leave Review</button>
          </div> */}
        </div>

        <div className="Order flex justContentSpaceBet W100">
          <div className="Photo-Info flex justContentSpaceBet">
            <img
              className="OrderImg"
              src="../../Graduation project assestst/Graduation project/مطعم بيتزا.jpg"
              alt=""
            />
            <div className="orderDetails">
              <h6>Order#999222</h6>
              <p>April,06</p>
              <p>Family Market</p>
            </div>
          </div>
          {/* <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Leave Review</button>
          </div> */}
        </div>

        <div className="Order LastOrder flex Wrap justContentSpaceBet W80">
          <div className="Photo-Info flex justContentSpaceBet">
            <img
              className="OrderImg"
              src="../../Graduation project assestst/Graduation project/نجار.jpg"
              alt=""
            />
            <div className="orderDetails">
              <h6>Order#999222</h6>
              <p>April,06</p>
              <p>Family Market</p>
            </div>
          </div>
          {/* <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Leave Review</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

function Item({ order }) {
  return (
    <div className="Order flex justContentSpaceBet W100">
      <div className="Photo-Info flex justContentSpaceBet">
        <img
          className="OrderImg"
          src={order.providerID.photo}
          alt="Provider Logo"
        />
        <div className="orderDetails">
          <h6>{`Order#${order._id}`}</h6>
          <p>{order.createdAt}</p>
          <p>{order.providerID.name}</p>
        </div>
      </div>
      {/* <div className="trackOrderBtnDiv alignselfCenter">
          <button className="trackOrderBtn">Leave Review</button>
        </div> */}
    </div>
  );
}

export default MyCompletedOrders;

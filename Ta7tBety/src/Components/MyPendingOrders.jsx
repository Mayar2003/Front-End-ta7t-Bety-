import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useMyOrders from "../Hooks/useMyOrders";
import ApiManager from "../ApiManager/ApiManager";

function MyPendingOrders() {
  const { orders, setOrders } = useMyOrders("pending");

  function handleCancelOrder(e, orderId) {
    e.preventDefault();
    ApiManager.cancelOrder(orderId)
      .then((res) => {
        console.log("Order cancelled successfully:", res.data);
        // Update the orders state after cancellation
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
      })
      .catch((err) => {
        console.error("Error cancelling order:", err);
      });
  }

  return (
    <>
      <div className="ActiveOrders flex Wrap">
        {orders.map((order) => (
          <Item
            key={order._id}
            order={order}
            onCancelOrder={handleCancelOrder}
          />
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
          <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Cancel</button>
          </div>
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
          <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Cancel</button>
          </div>
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
          <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Cancel</button>
          </div>
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
          <div className="trackOrderBtnDiv alignselfCenter">
            <button className="trackOrderBtn">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Item({ order, onCancelOrder }) {
  return (
    <div className="Order flex justContentSpaceBet W100">
      <div className="Photo-Info flex justContentSpaceBet">
        <img
          className="OrderImg"
          src={order.userID.photo}
          alt="Provider Logo"
        />
        <div className="orderDetails">
          <h6>{`Order#${order._id}`}</h6>
          <p>{order.createdAt}</p>
          <p>{order.userID.name}</p>
        </div>
      </div>
      <div className="trackOrderBtnDiv alignselfCenter">
        <button
          className="trackOrderBtn"
          onClick={(e) => onCancelOrder(e, order._id)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default MyPendingOrders;

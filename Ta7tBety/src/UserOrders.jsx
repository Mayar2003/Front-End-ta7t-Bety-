import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserOrdersComp from "./Components/UserOrdersComp";
import UserOrdersSectionOne from "./Components/UserOrdersSectionOne";
function UserOrders() {
  return (
    <>
      <Header />
      <UserOrdersSectionOne />
      <UserOrdersComp />
      <Footer />
    </>
  );
}
export default UserOrders;

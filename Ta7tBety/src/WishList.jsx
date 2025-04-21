import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import WishListSectionOne from "./Components/WishListSectionOne";
import WishListComponent from "./Components/WishListComponenet";
import Footer from "./Components/Footer";


function WishList() {

  return (
    <>
      <Header></Header>
      <WishListSectionOne />
      <WishListComponent />
      <Footer></Footer>
    </>
  );
}

export default WishList;

import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import HouseWorkSectionOne from "./Components/HouseWorkSectionOne";
import HouseWorkProviderComp from "./Components/HouseWorkProviderComp";
import Footer from "./Components/Footer";


function HouseWorkProvider() {

  return (
    <>
      <Header></Header>
      <HouseWorkSectionOne />
      <HouseWorkProviderComp />
      <Footer></Footer>
    </>
  );
}

export default HouseWorkProvider;

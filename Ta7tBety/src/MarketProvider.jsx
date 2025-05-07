import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import MarketSectionOne from "./Components/MarketSectionOne";
import MarketProvidrComp from "./Components/MarketProviderComp";
import Footer from "./Components/Footer";


function MarketrProvider() {

  return (
    <>
      <Header></Header>
      <MarketSectionOne />
      <MarketProvidrComp />
      <Footer></Footer>
    </>
  );
}

export default MarketrProvider;

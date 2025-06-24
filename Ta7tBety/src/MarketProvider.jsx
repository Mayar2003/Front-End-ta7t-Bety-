import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import MarketSectionOne from "./Components/MarketSectionOne";
import MarketProvidrComp from "./Components/MarketProviderComp";
import Footer from "./Components/Footer";

function MarketrProvider() {
  const location = useLocation();
  const { provider } = location.state || { provider: {} };

  return (
    <>
      <Header></Header>
      <MarketSectionOne />
      <MarketProvidrComp provider={provider} />
      <Footer></Footer>
    </>
  );
}

export default MarketrProvider;

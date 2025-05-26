import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import RepairSectionOne from "./Components/RepairSectionOne";
import RepairsProviderComp from "./Components/RepairsProviderComp";
import Footer from "./Components/Footer";

function RepairsProvider() {
  const location = useLocation();
  console.log(location.state);
  const { provider } = location.state || { provider: null };

  return (
    <>
      <Header></Header>
      <RepairSectionOne />
      <RepairsProviderComp provider={provider} />
      <Footer></Footer>
    </>
  );
}

export default RepairsProvider;

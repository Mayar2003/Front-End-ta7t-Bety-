import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import RepairSectionOne from "./Components/RepairSectionOne";
import RepairsProviderComp from "./Components/RepairsProviderComp";
import Footer from "./Components/Footer";


function RepairsProvider() {

  return (
    <>
      <Header></Header>
      <RepairSectionOne />
      <RepairsProviderComp />
      <Footer></Footer>
    </>
  );
}

export default RepairsProvider;

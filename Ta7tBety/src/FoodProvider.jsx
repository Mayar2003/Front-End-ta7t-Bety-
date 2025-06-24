import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import FoodSectionOne from "./Components/FoodSectionOne";
import FoodProviderComp from "./Components/FoodProviderComp";
import Footer from "./Components/Footer";

function FoodProvider() {
  const location = useLocation();
  const { provider } = location.state || { provider: {} };

  return (
    <>
      <Header></Header>
      <FoodSectionOne />
      <FoodProviderComp provider={provider} />
      <Footer></Footer>
    </>
  );
}

export default FoodProvider;

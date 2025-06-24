import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import HealthCareSectionOne from "./Components/HealthCareSectionOne";
import HealthCareProviderComp from "./Components/HealthCareProviderComp";
import Footer from "./Components/Footer";

function HealthCareProvider() {
  const location = useLocation();
  const { provider } = location.state || { provider: {} };

  return (
    <>
      <Header></Header>
      <HealthCareSectionOne />
      <HealthCareProviderComp provider={provider} />
      <Footer></Footer>
    </>
  );
}

export default HealthCareProvider;

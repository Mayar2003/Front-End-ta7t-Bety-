import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import FoodSectionOne from "./Components/FoodSectionOne";
import FoodProviderComp from "./Components/FoodProviderComp";
import Footer from "./Components/Footer";


function FoodProvider() {

  return (
    <>
      <Header></Header>
      <FoodSectionOne />
      <FoodProviderComp />
      <Footer></Footer>
    </>
  );
}

export default FoodProvider;

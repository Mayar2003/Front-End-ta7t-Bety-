import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUsSectionOne from "./Components/AboutUsSectionOne";
import AboutUsSectionTwo from "./Components/AboutUsSectionTwo";
import PositiveReviews from "./Components/PositiveReviews";
import BestProviders from "./Components/BestProviders";

function AboutUs() {
  return (
    <>
      <Header></Header>
      <AboutUsSectionOne></AboutUsSectionOne>
      <AboutUsSectionTwo></AboutUsSectionTwo>
      <PositiveReviews></PositiveReviews>
      <BestProviders></BestProviders>
      <Footer></Footer>
    </>
  );
}

export default AboutUs;

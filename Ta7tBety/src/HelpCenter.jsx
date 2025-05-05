import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HelpCenterSectionOne from "./Components/HelpCenterSectionOne";
import HelpCenterContactUs from "./Components/HelpCenterContactUs";
import HelpCenterFAQ from "./Components/HelpCenterFAQ";

function AboutUs() {
  return (
    <>
      <Header></Header>
      <HelpCenterSectionOne></HelpCenterSectionOne>
      <HelpCenterContactUs></HelpCenterContactUs>
      <HelpCenterFAQ></HelpCenterFAQ>
      <Footer></Footer>
    </>
  );
}

export default AboutUs;

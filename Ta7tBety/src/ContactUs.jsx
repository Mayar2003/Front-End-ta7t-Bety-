import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import ContactUsSectionOne from "./Components/ContactUsSectionOne";
import ContactUsChat from "./Components/ContactUsChat";
import Footer from "./Components/Footer";


function ContactUs() {

  
  return (
    <>
      <Header></Header>
      <ContactUsSectionOne />
      <ContactUsChat />
      <Footer></Footer>
    </>
  );
}

export default ContactUs;

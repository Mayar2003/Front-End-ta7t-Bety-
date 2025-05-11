import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProfileSectionOne from "./Components/ProfileSectionOne";
import { AuthContext } from "./Contexts/AuthContext";

function Profile() {
  return (
    <>
      <Header></Header>
      <ProfileSectionOne></ProfileSectionOne>
<<<<<<< HEAD
      <div className="ProfilPage flex ">
        <div className="mainProfileLeftDiv">
          <div className="Choices">
            <Link to="ProfileMyOrders" className="decorationNone">
              {" "}
              <p>My Orders</p>{" "}
            </Link>
            <Link to="ProfileAccountInfo" className="decorationNone">
              {" "}
              <p>Account Info</p>
            </Link>
            <Link to="ProfileSavedAdresses" className="decorationNone">
              {" "}
              <p>Saved Adresses</p>
            </Link>
          </div>
        </div>
=======
       <div className="ProfilPage flex ">
              <div className="mainProfileLeftDiv">
                <div className="Choices">
                 <Link to="ProfileMyOrders" className="decorationNone"> <p>My Orders</p> </Link>
                 <Link to="ProfileAccountInfo" className="decorationNone"> <p>Account Info</p></Link>
                 <Link to="ProfileSavedAdresses" className="decorationNone"> <p>Saved Adress</p></Link>
                </div>
              </div>
>>>>>>> 3d22011 (updated Project)

        <div className="mainProfileRightDiv flex justContentSpaceBet W100 alignContentCenter">
          <Outlet />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Profile;

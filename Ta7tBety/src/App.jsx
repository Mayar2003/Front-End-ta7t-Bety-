import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Header from './Components/Header'; 
import Home from './Home';
import AboutUs from './AboutUs';
import HelpCenter from './HelpCenter';
import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyCode from './VerifyCode';
import NewPassword from './NewPassword'; 
import PrivateRoute from './Components/PrivateRoute.jsx';
import ProfileAccountInfo from './Components/ProfileAccountInfo';
import ProfileMyOrders from './Components/ProfileMyOrders';
import ProfileSavedAdresses from './Components/ProfileSavedAdresses';
import MyActiveOrders from "./Components/MyActiveOrders";
import MyCompletedOrders from "./Components/MyCompletedOrders";
import MyCanceldOrders from "./Components/MyCanceldOrders";

function App() {

  return (
    <Router>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUS' element={<AboutUs />} />
        <Route path='/HelpCenter' element={<HelpCenter />} />

        <Route path="/Profile" element={<Profile />}>
          <Route index element={<ProfileAccountInfo />} />
          <Route path="ProfileAccountInfo" element={<ProfileAccountInfo />} />
          {/* <Route path="ProfileMyOrders" element={<ProfileMyOrders />} /> */}
          <Route path="ProfileMyOrders" element={<ProfileMyOrders />}>
            <Route index element={<MyActiveOrders />} />
            <Route path="MyActiveOrders" element={<MyActiveOrders />} />
            <Route path="MyCompletedOrders" element={<MyCompletedOrders />} />
            <Route path="MyCanceldOrders" element={<MyCanceldOrders />} />
          </Route>
          <Route path="ProfileSavedAdresses" element={<ProfileSavedAdresses />} />
        </Route>

        

        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/VerifyCode' element={<VerifyCode />} />
        <Route path='/NewPassword' element={<NewPassword />} /> 

        {/* <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;



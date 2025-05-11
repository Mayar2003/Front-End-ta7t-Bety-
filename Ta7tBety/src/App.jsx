import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import HelpCenter from "./HelpCenter";
import Profile from "./Profile";
import Services from "./Services";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import VerifyCode from "./VerifyCode";
import NewPassword from "./NewPassword";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ProfileAccountInfo from "./Components/ProfileAccountInfo";
import ProfileMyOrders from "./Components/ProfileMyOrders";
import ProfileSavedAdresses from "./Components/ProfileSavedAdresses";
import MyActiveOrders from "./Components/MyActiveOrders";
import MyCompletedOrders from "./Components/MyCompletedOrders";
import MyCanceldOrders from "./Components/MyCanceldOrders";
import WishList from './WishList.jsx';
import Providers from './Providers.jsx';
import RepairsProvider from './RepairsProvider.jsx';
import FoodProvider from './FoodProvider.jsx';
import MarketProvider from './MarketProvider.jsx';
import HealthCareProvider from './HealthCareProvider.jsx';
import HouseWorkProvider from './HouseWorkProvider.jsx';
import RepairServiceDetails from './RepairServiceDetails.jsx';
import { AuthContext } from "./Contexts/AuthContext.js";
import { ResponseStateContext } from "./Contexts/ResponseStateContext.js";

function App() {
  const [user, setUser] = useState(null);
  const [responseState, setResponseState] = useState({
    response: null,
    error: null,
    loading: false,
  });

  return (

 <AuthContext.Provider value={{ user, setUser }}>
      <ResponseStateContext.Provider
        value={{ responseState, setResponseState }}
      >
    <Router>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUS' element={<AboutUs />} />
        <Route path='/HelpCenter' element={<HelpCenter />} />
        <Route path='/Services' element={<Services />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Providers" element={<Providers />} />
        <Route path="/RepairsProvider" element={<RepairsProvider />} />
        <Route path="/FoodProvider" element={<FoodProvider />} />
        <Route path="/MarketProvider" element={<MarketProvider />} />
        <Route path="/HealthCareProvider" element={<HealthCareProvider />} />
        <Route path="/HouseWorkProvider" element={<HouseWorkProvider />} />
        <Route path="/RepairServiceDetails" element={<RepairServiceDetails />} />

        <Route path="/Profile" element={<Profile />}>
        
          <Route index element={<ProfileAccountInfo />} />
          <Route path="ProfileAccountInfo" element={<ProfileAccountInfo />} />
          <Route path="ProfileMyOrders" element={<ProfileMyOrders />}>
            <Route index element={<MyActiveOrders />} />
            <Route path="MyActiveOrders" element={<MyActiveOrders />} />
            <Route path="MyCompletedOrders" element={<MyCompletedOrders />} />
            <Route path="MyCanceldOrders" element={<MyCanceldOrders />} />
          </Route>
          

              <Route
                path="ProfileSavedAdresses"
                element={<ProfileSavedAdresses />}
              />
            </Route>

            <Route path="/Signin" element={<SignIn user={user} />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/VerifyCode" element={<VerifyCode user={user} />} />
            <Route path="/NewPassword" element={<NewPassword />} />

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
      </ResponseStateContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

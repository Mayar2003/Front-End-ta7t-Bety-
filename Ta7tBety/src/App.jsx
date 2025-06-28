import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SearchToggle from "./SearchToggle";
// import SearchProviderComp from "./SearchProviderComp";
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
import MyPendingOrders from "./Components/MyPendingOrders";
import WishList from "./WishList.jsx";
import Providers from "./Providers.jsx";
import RepairsProvider from "./RepairsProvider.jsx";
import FoodProvider from "./FoodProvider.jsx";
import MarketProvider from "./MarketProvider.jsx";
import HealthCareProvider from "./HealthCareProvider.jsx";
import HouseWorkProvider from "./HouseWorkProvider.jsx";
import RepairServiceDetails from "./RepairServiceDetails.jsx";
import MarketServiceDetails from "./MarketServiceDetails.jsx";
import HealthCareServiceDetails from "./HealthCareServiceDetails.jsx";
import HouseWorkServiceDetails from "./HouseWorkServiceDetails.jsx";
import { AuthContext } from "./Contexts/AuthContext.js";
import { ResponseStateContext } from "./Contexts/ResponseStateContext.js";
import SearchProvider from "./SearchProvider.jsx";
import UserOrders from "./UserOrders.jsx";
import ContactUs from "./ContactUs.jsx";
import MainPage from "./MainPage.jsx";
import { CartContext } from "./Contexts/CartContext.js";
import AdminMain from "./admin/Pages/AdminMain.jsx";
import Users from "./admin/Pages/Users.jsx";
import Orders from "./admin/Pages/Orders.jsx";
import ProvidersDash from "./admin/Pages/Providers.jsx";
import Dashboard from "./admin/Pages/Dashboard.jsx";
import ProviderTypeTable from "./admin/Pages/ProviderByType.jsx";
import ProviderDetails from "./admin/Pages/ProviderDetails.jsx";
// import LocationPickerModal from './Maps/location_picker.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [responseState, setResponseState] = useState({
    response: null,
    error: null,
    loading: false,
  });
  const [cart, setCart] = useState([]);

  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const botReply = await getBotResponse(input);
    setMessages((prev) => [
      ...prev,
      userMessage,
      { sender: "bot", text: botReply },
    ]);
  };

  const getBotResponse = async (msg) => {
    return `Bot: You said "${msg}"`;
  };

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <ResponseStateContext.Provider
          value={{ responseState, setResponseState }}
        >
          <CartContext.Provider value={{ cart, setCart }}>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MainPage" element={<MainPage />} />
                <Route path="/AboutUS" element={<AboutUs />} />
                <Route path="/HelpCenter" element={<HelpCenter />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/WishList" element={<WishList />} />
                <Route path="/Providers" element={<Providers />} />
                <Route path="/RepairsProvider" element={<RepairsProvider />} />
                <Route path="/FoodProvider" element={<FoodProvider />} />
                <Route path="/MarketProvider" element={<MarketProvider />} />
                {/* <Route path="/location-picker" element={<LocationPickerModal />} /> */}
                <Route
                  path="/HealthCareProvider"
                  element={<HealthCareProvider />}
                />
                <Route
                  path="/HouseWorkProvider"
                  element={<HouseWorkProvider />}
                />
                <Route
                  path="/RepairServiceDetails"
                  element={<RepairServiceDetails />}
                />
                <Route
                  path="/MarketServiceDetails"
                  element={<MarketServiceDetails />}
                />
                <Route
                  path="/HealthCareServiceDetails"
                  element={<HealthCareServiceDetails />}
                />
                <Route
                  path="/HouseWorkServiceDetails"
                  element={<HouseWorkServiceDetails />}
                />
                <Route
                  path="/search/:providerName"
                  element={<SearchProvider />}
                />
                <Route path="/UserOrders" element={<UserOrders />} />
                <Route path="/ContactUs" element={<ContactUs />} />

                <Route path="/Profile" element={<Profile />}>
                  <Route index element={<ProfileAccountInfo />} />
                  <Route
                    path="ProfileAccountInfo"
                    element={<ProfileAccountInfo />}
                  />
                  <Route path="ProfileMyOrders" element={<ProfileMyOrders />}>
                    <Route index element={<MyActiveOrders />} />
                    <Route path="MyActiveOrders" element={<MyActiveOrders />} />
                    <Route
                      path="MyCompletedOrders"
                      element={<MyCompletedOrders />}
                    />
                    <Route
                      path="MyCanceldOrders"
                      element={<MyCanceldOrders />}
                    />
                    <Route
                      path="MyPendingOrders"
                      element={<MyPendingOrders />}
                    />
                  </Route>

                  <Route
                    path="ProfileSavedAdresses"
                    element={<ProfileSavedAdresses />}
                  />
                </Route>

                <Route path="/Signin" element={<SignIn user={user} />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route
                  path="/VerifyCode"
                  element={<VerifyCode user={user} />}
                />
                <Route path="/NewPassword" element={<NewPassword />} />

                {/* <Route
          path="/profile"
          element={
            <PrivateRoute>
            <Profile />
            </PrivateRoute>
            }
            /> */}

                <Route path="/dashboard" element={<AdminMain />}>
                  <Route index element={<Dashboard />} />
                  <Route path="users" element={<Users />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="providers" element={<ProvidersDash />} />
                  <Route
                    path="providers/:type"
                    element={<ProviderTypeTable />}
                  />
                  <Route
                    path="providers/:type/:id"
                    element={<ProviderDetails />}
                  />
                </Route>
              </Routes>
            </Router>
          </CartContext.Provider>
        </ResponseStateContext.Provider>
      </AuthContext.Provider>

      <div>
        <button
          className="ChatbotBtn toggle-btn"
          onClick={() => setShowChat(!showChat)}
        >
          {/* {showChat ? 'Close Chat' : 'Chat with us'} */}
          <i class="fa-solid fa-robot"></i>
        </button>

        {showChat && (
          <div className="chat-container flex justify-content-between">
            <div className="AI-ChatDiv">
              <div className="messageContainer flex W50 ">
                <img
                  src="../G.Project assets2.png (2)/converted-files.png/Chatbot icon.jpg.png"
                  alt=""
                />
                <div className="AImessage defaultBlue">Hi Jane!</div>
              </div>

              <div className="messageContainer flex ">
                <img
                  src="../G.Project assets2.png (2)/converted-files.png/Chatbot icon.jpg.png"
                  alt=""
                />
                <div className="AImessage defaultBlue">
                  How Can i asist you ?
                </div>
              </div>

              <div className="ChatbotUserMessage mrgnt-1 flex">
                <div className="ChatbotUserMessageContent">
                  What is the nearest Market to my locattion?.
                </div>
                <img
                  src="../../Graduation project assestst/Graduation project/user.png"
                  alt=""
                />
              </div>
            </div>

            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            <div className="chat-input flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <div className="ChatbotSendbttn">
                <button onClick={handleSend}>
                  <i class="fa-brands fa-telegram"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

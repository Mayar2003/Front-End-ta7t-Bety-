import "./App.css";
import { useLocation } from "react-router-dom";
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

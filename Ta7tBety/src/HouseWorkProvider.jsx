import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import HouseWorkSectionOne from "./Components/HouseWorkSectionOne";
import HouseWorkProviderComp from "./Components/HouseWorkProviderComp";
import Footer from "./Components/Footer";
import useCurrentLocation from "./Hooks/useCurrentLocation";

function HouseWorkProvider() {
  const location = useLocation();
  const { provider } = location.state || { provider: {} };

  return (
    <>
      <Header></Header>
      <HouseWorkSectionOne />
      <HouseWorkProviderComp provider={provider} />
      <Footer></Footer>
    </>
  );
}

export default HouseWorkProvider;

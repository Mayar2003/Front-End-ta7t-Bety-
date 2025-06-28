import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import RepairSectionOne from "./Components/RepairSectionOne";
import RepairsProviderComp from "./Components/RepairsProviderComp";
import Footer from "./Components/Footer";

function RepairsProvider() {
  const location = useLocation();
  const { provider } = location.state || { provider: null };

  return (
    <>
      <Header></Header>
      <RepairSectionOne />
      <RepairsProviderComp provider={provider} />
      <Footer></Footer>
    </>
  );
}

export default RepairsProvider;

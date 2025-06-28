import "./App.css";
import Header from "./Components/Header";
import RepairSectionOne from "./Components/RepairSectionOne";
import ServicesProvidersComponent from "./Components/ServiceProvidersComponent";
import Footer from "./Components/Footer";
import { useLocation } from "react-router-dom";

function Providers() {
  const location = useLocation();
  const { providers } = location.state || { providers: [] };

  return (
    <>
      <Header></Header>
      <RepairSectionOne />
      <ServicesProvidersComponent providers={providers} />
      <Footer></Footer>
    </>
  );
}

export default Providers;

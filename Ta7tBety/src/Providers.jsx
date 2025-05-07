import "./App.css";
import Header from "./Components/Header"; 
import RepairSectionOne from "./Components/RepairSectionOne";
import ServicesProvidersComponent from "./Components/ServiceProvidersComponent";
import Footer from "./Components/Footer";


function Providers() {

  return (
    <>
      <Header></Header>
      <RepairSectionOne />
      <ServicesProvidersComponent />
      <Footer></Footer>
    </>
  );
}

export default Providers;

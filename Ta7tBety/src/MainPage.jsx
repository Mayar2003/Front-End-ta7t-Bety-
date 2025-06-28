// import servicesProviders from "../assets/servicesProviders.png";
import servicesProviders from "./assets/servicesProviders.png";
import Location from "./assets/Location.png";
import {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MainPage() {

    const [showLearnMoreText, setShowLearnMoreText] = useState(false);

    const toggleLearnMoreText = () => {
    setShowLearnMoreText(!showLearnMoreText);
  };

  return (
    <>
    <Header/>
      <div className="container-fluid ExtraLightBG">
        <div className="container HomeSectionOne">
          <div className="LeftSection">
           <h3 className="inter heading-LeftSecOne" style={{ fontSize: showLearnMoreText ? '1.5rem' : '3rem' , fontWeight: showLearnMoreText ? '500' : '700' }}>
        {showLearnMoreText 
          ? "Taht Bety is a mobile app and website that connect users with trusted local service providers like plumbers, electricians, restaurants, and delivery services quickly, safely, and right to their doorstep." 
          : "Taht Bety All the services you need, under one roof."}
      </h3>

            <button className="inter learnmoreBtn" onClick={toggleLearnMoreText}>
                     {showLearnMoreText ? "Show Less" : "Learn More"}

              {/* Learn More */}
              </button>
          </div>

          <div className="RightSection">
            <img
              className="ServiceProvidersImg"
              src={servicesProviders}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer/>
     </>
  );
}

export default MainPage;
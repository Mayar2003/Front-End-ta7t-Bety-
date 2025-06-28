import servicesProviders from "../assets/servicesProviders.png";
import Location from "../assets/Location.png";
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
function HomeSectionOne() {
  const navigate = useNavigate();
    const [showLearnMoreText, setShowLearnMoreText] = useState(false);

    const toggleLearnMoreText = () => {
    setShowLearnMoreText(!showLearnMoreText);
  };
  return (
    <>
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

        {/* 
          <div className="LocationSection">
            <div >
                <img className="LocImg" src={Location} alt="" />
            </div>

            <div className="LocInputSection">
                <h3 className="Loc-h3 inter">  Set your Location here !</h3>

   <input type="text" className="LocInput"  placeholder="&#xF002;" >
   
   </input>
   <button className="LocBtn">Let's go</button>
            </div>
          </div> */}
      </div>

      <div className="LocationSection">
        <div>
          <img className="LocImg" src={Location} alt="" />
        </div>

        <div className="LocInputSection">
          <h3 className="Loc-h3 inter"> Set your Location here !</h3>
          <div className="location-input-icons">
            <i className="fa-solid fa-location-dot"></i>
            <i className="fa-solid fa-location-crosshairs"></i>
            <input
              type="text"
              className="LocInput"
              placeholder="search for area, street name, landmark..."
            ></input>
            <button  className="LocBtn"  >Let's go</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSectionOne;

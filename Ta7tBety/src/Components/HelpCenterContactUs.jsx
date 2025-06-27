import { useState } from "react";
function HelpCenterContactUs() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const togglePhoneNumber = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };
  return (
    <>
      <div className="ContactUs">
        <h2 className="contactUsheading">Contct Us</h2>
        <div className="ContactUsIcons flex JustifyContentCenter ">
          <div
            className="W20 flex alignItemsCenter"
            onClick={togglePhoneNumber}
          >
            {showPhoneNumber ? (
              <h4 className="defaultBlue textAlignCenter">012345678</h4>
            ) : (
              <i className="fa-solid fa-headphones"></i>
            )}
          </div>
          <div className="W20 flex">
            <a
              href="https://wa.me/201508200037"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Taht Bety WhatsApp"
              title=" Taht Bety WhatsApp"
            ><i className="fa-brands fa-whatsapp"></i>
            </a>
            
          </div>
          <div className="W20 flex">
              <a
              href="https://www.facebook.com/TahtBety"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Taht Bety Facebook"
              title="Taht Bety Facebook"
            ><i className="fa-brands fa-facebook"></i>
            </a>
            
          </div>
          <div className="W20 flex">
            <a
              href="https://mail.google.com/mail/?view=cm&to=tahtbety@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email to Taht Bety"
              className="email-link"
              title="Email Taht Bety"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpCenterContactUs;

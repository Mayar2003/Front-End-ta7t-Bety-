import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookAppointmentCalendar from "./BookAppointmentCalendar";
import ProviderDetailsAndReviews from "./ProviderDetailsAndReviews";

function HealthCareServiceDetailsComp() {
  const location = useLocation();
  const { provider, post, postAvgRating } = location.state || {
    provider: null,
    post: null,
  };
  console.log("Provider:", provider);
  console.log("Post:", post);

  const [BookingPopUp, setchangeBookingPopUp] = useState(false);

  function BookingToggleModal(e) {
    setchangeBookingPopUp(!BookingPopUp);
    e.preventDefault();
  }

  return (
    <>
      <div className="ProviderPage flex ">
        <ProviderDetailsAndReviews provider={provider} post={post} />

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet FitContentHeight">
          <div className="ServiceDescriptionDetails W100 marginauto">
            <img
              className="ServiceDoctorPhoto"
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />
            <div className="ProviderServiceinfo  alignItemsBaseline flex justContentSpaceBet W80">
              <h5 className="textAlignLeft  RepairServices defaultBlue ">
                {post.title}
              </h5>
              <h5>
                {postAvgRating} <i className="fa-solid fa-star"></i>
              </h5>
            </div>

            <div className="ServiceDetaials textAlignLeft AboutDoctor ">
              <input
                type="checkbox"
                id="Seemoretoggle toggle"
                className=" Seemoretoggle toggle"
              />
              <h5 className="defaultBlue textAlignLeft">About Doctor</h5>
              <p className="ServiceDetailsDescription text">{post.content} </p>

              <label
                htmlFor="Seemoretoggle toggle"
                className="Seemoretogglelabel "
              >
                Read More
              </label>
            </div>
            <div className="AcademicQualifications textAlignLeft W90 marginauto">
              <h5 className="defaultBlue textAlignLeft">
                Academic Qualifications
              </h5>
              <p className="ServiceDetailsDescription text">
                Bachelor of Medicine and Surgery - Ain Shams University -
                Egyptian Fellowship for Internal Medicine, Fever and Infectious
                Diseases
              </p>
            </div>
          </div>

          <button
            className=" BookAppointmentbttn marginauto"
            onClick={BookingToggleModal}
          >
            <i className="fa-regular fa-calendar-days"></i> Book an appointment
          </button>
        </div>

        {BookingPopUp && (
          <div className="BookingPopUp">
            <div className="lightOverlay">
              <div className="popUp BookingPopUp">
                <div className="popUpHeader flex justContentSpaceBet">
                  <h5 className="ChangeEmail">Book an appointment</h5>
                  <i
                    class="fa-solid fa-xmark"
                    onClick={() => setchangeBookingPopUp(false)}
                  ></i>
                </div>

                <div className="BookingCalendar W80">
                  <BookAppointmentCalendar></BookAppointmentCalendar>

                  <button className=" BookthisAppbttn ">
                    <i className="fa-regular fa-calendar-days"></i> Book This
                    appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HealthCareServiceDetailsComp;
